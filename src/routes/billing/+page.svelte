<script lang="ts">
  import { onMount } from "svelte";

  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:8001";

  type InvoiceItem = {
    description: string;
    quantity: number;
    unit_price: number;
  };

  type Invoice = {
    _id?: string;
    type: "quote" | "invoice";
    invoice_number: string;
    client_name: string;
    client_email: string;
    client_address: string;
    items: InvoiceItem[];
    total: number;
    status: "draft" | "sent" | "paid" | "unpaid";
    created_at?: string;
    due_date?: string;
  };

  let invoices: Invoice[] = [];
  let showForm = false;
  let editingInvoice: Invoice | null = null;

  // Form data
  let formData: Invoice = {
    type: "quote",
    invoice_number: "",
    client_name: "",
    client_email: "",
    client_address: "",
    items: [{ description: "", quantity: 1, unit_price: 0 }],
    total: 0,
    status: "draft",
  };

  let filterType: "all" | "quote" | "invoice" = "all";
  let filterStatus: "all" | "draft" | "sent" | "paid" | "unpaid" = "all";

  onMount(() => {
    fetchInvoices();
  });

  async function fetchInvoices() {
    try {
      const response = await fetch(`${BACKEND_URL}/api/invoices`);
      if (response.ok) {
        invoices = await response.json();
      }
    } catch (error) {
      console.error("Erreur lors du chargement des factures:", error);
    }
  }

  function addItem() {
    formData.items = [
      ...formData.items,
      { description: "", quantity: 1, unit_price: 0 },
    ];
  }

  function removeItem(index: number) {
    formData.items = formData.items.filter((_, i) => i !== index);
    calculateTotal();
  }

  function calculateTotal() {
    formData.total = formData.items.reduce(
      (sum, item) => sum + item.quantity * item.unit_price,
      0,
    );
  }

  async function submitForm() {
    calculateTotal();

    try {
      const url = editingInvoice
        ? `${BACKEND_URL}/api/invoices/${editingInvoice._id}`
        : `${BACKEND_URL}/api/invoices`;

      const method = editingInvoice ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchInvoices();
        resetForm();
        showForm = false;
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
    }
  }

  function resetForm() {
    formData = {
      type: "quote",
      invoice_number: "",
      client_name: "",
      client_email: "",
      client_address: "",
      items: [{ description: "", quantity: 1, unit_price: 0 }],
      total: 0,
      status: "draft",
    };
    editingInvoice = null;
  }

  function editInvoice(invoice: Invoice) {
    editingInvoice = invoice;
    formData = { ...invoice };
    showForm = true;
  }

  async function deleteInvoice(id: string) {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) return;

    try {
      const response = await fetch(`${BACKEND_URL}/api/invoices/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchInvoices();
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const response = await fetch(`${BACKEND_URL}/api/invoices/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        await fetchInvoices();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
    }
  }

  function downloadPDF(id: string) {
    window.open(`${BACKEND_URL}/api/invoices/${id}/pdf`, "_blank");
  }

  $: filteredInvoices = invoices.filter((inv) => {
    const typeMatch = filterType === "all" || inv.type === filterType;
    const statusMatch = filterStatus === "all" || inv.status === filterStatus;
    return typeMatch && statusMatch;
  });

  function getStatusColor(status: string) {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "unpaid":
        return "bg-red-100 text-red-800";
      case "sent":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }

  function getStatusLabel(status: string) {
    switch (status) {
      case "paid":
        return "Payé";
      case "unpaid":
        return "Impayé";
      case "sent":
        return "Envoyé";
      default:
        return "Brouillon";
    }
  }
</script>

# Facturation
<svelte:head>
  <title>Facturation - Graphiste</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-4xl font-bold text-gray-800">Facturation</h1>
    <button
      on:click={() => {
        resetForm();
        showForm = !showForm;
      }}
      class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      data-testid="new-invoice-btn"
    >
      {showForm ? "Annuler" : "+ Nouveau"}
    </button>
  </div>

  {#if showForm}
    <div
      class="bg-white rounded-lg shadow-lg p-8 mb-8"
      data-testid="invoice-form"
    >
      <h2 class="text-2xl font-bold mb-6">
        {editingInvoice ? "Modifier" : "Créer"} un {formData.type === "quote"
          ? "devis"
          : "facture"}
      </h2>

      <form on:submit|preventDefault={submitForm} class="space-y-6">
        <!-- Type -->
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label
              for="invoice-type"
              class="block text-sm font-medium text-gray-700 mb-2">Type</label
            >
            <select
              id="invoice-type"
              bind:value={formData.type}
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              data-testid="invoice-type"
            >
              <option value="quote">Devis</option>
              <option value="invoice">Facture</option>
            </select>
          </div>

          <div>
            <label
              for="invoice-number"
              class="block text-sm font-medium text-gray-700 mb-2">Numéro</label
            >
            <input
              id="invoice-number"
              type="text"
              bind:value={formData.invoice_number}
              placeholder="DEV-2025-001"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              data-testid="invoice-number"
            />
          </div>
        </div>

        <!-- Client Info -->
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label
              for="client-name"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Nom du client</label
            >
            <input
              id="client-name"
              type="text"
              bind:value={formData.client_name}
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              data-testid="client-name"
            />
          </div>

          <div>
            <label
              for="client-email"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Email du client</label
            >
            <input
              id="client-email"
              type="email"
              bind:value={formData.client_email}
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              data-testid="client-email"
            />
          </div>
        </div>

        <div>
          <label
            for="client-address"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Adresse du client</label
          >
          <textarea
            id="client-address"
            bind:value={formData.client_address}
            rows="2"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            data-testid="client-address"
          ></textarea>
        </div>

        <!-- Items -->
        <div>
          <div class="flex justify-between items-center mb-4">
            <label
              for="invoice-items"
              class="block text-sm font-medium text-gray-700"
              >Lignes de facturation</label
            >
            <button
              type="button"
              on:click={addItem}
              class="text-blue-600 hover:text-blue-700 font-medium"
              data-testid="add-item-btn"
            >
              + Ajouter une ligne
            </button>
          </div>

          <!-- Champ fictif pour associer le label -->
          <input type="hidden" id="invoice-items" />

          {#each formData.items as item, index}
            <div class="grid md:grid-cols-12 gap-4 mb-4 items-end">
              <div class="md:col-span-6">
                <label for="item-description-{index}" class="sr-only"
                  >Description</label
                >
                <input
                  id="item-description-{index}"
                  type="text"
                  bind:value={item.description}
                  placeholder="Description"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  data-testid="item-description-{index}"
                />
              </div>

              <div class="md:col-span-2">
                <label for="item-quantity-{index}" class="sr-only"
                  >Quantité</label
                >
                <input
                  id="item-quantity-{index}"
                  type="number"
                  bind:value={item.quantity}
                  on:input={calculateTotal}
                  min="1"
                  placeholder="Qté"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  data-testid="item-quantity-{index}"
                />
              </div>

              <div class="md:col-span-3">
                <label for="item-price-{index}" class="sr-only"
                  >Prix unitaire</label
                >
                <input
                  id="item-price-{index}"
                  type="number"
                  bind:value={item.unit_price}
                  on:input={calculateTotal}
                  min="0"
                  step="0.01"
                  placeholder="Prix unitaire"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  data-testid="item-price-{index}"
                />
              </div>

              <div class="md:col-span-1">
                {#if formData.items.length > 1}
                  <button
                    type="button"
                    on:click={() => removeItem(index)}
                    class="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    data-testid="remove-item-{index}"
                  >
                    ✕
                  </button>
                {/if}
              </div>
            </div>
          {/each}
        </div>

        <!-- Total -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex justify-between items-center text-xl font-bold">
            <span>Total:</span>
            <span data-testid="invoice-total"
              >{formData.total.toFixed(2)} €</span
            >
          </div>
        </div>

        <!-- Status -->
        <div>
          <label
            for="invoice-status"
            class="block text-sm font-medium text-gray-700 mb-2">Statut</label
          >
          <select
            id="invoice-status"
            bind:value={formData.status}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            data-testid="invoice-status"
          >
            <option value="draft">Brouillon</option>
            <option value="sent">Envoyé</option>
            <option value="paid">Payé</option>
            <option value="unpaid">Impayé</option>
          </select>
        </div>

        <div class="flex space-x-4">
          <button
            type="submit"
            class="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            data-testid="submit-invoice-btn"
          >
            {editingInvoice ? "Mettre à jour" : "Créer"}
          </button>

          <button
            type="button"
            on:click={() => {
              resetForm();
              showForm = false;
            }}
            class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  {/if}

  <!-- Filters -->
  <div class="bg-white rounded-lg shadow p-6 mb-8">
    <h3 class="text-lg font-semibold mb-4">Filtres</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label
          for="filter-type"
          class="block text-sm font-medium text-gray-700 mb-2">Type</label
        >
        <select
          id="filter-type"
          bind:value={filterType}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
          data-testid="filter-type"
        >
          <option value="all">Tous</option>
          <option value="quote">Devis</option>
          <option value="invoice">Factures</option>
        </select>
      </div>

      <div>
        <label
          for="filter-status"
          class="block text-sm font-medium text-gray-700 mb-2">Statut</label
        >
        <select
          id="filter-status"
          bind:value={filterStatus}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
          data-testid="filter-status"
        >
          <option value="all">Tous</option>
          <option value="draft">Brouillon</option>
          <option value="sent">Envoyé</option>
          <option value="paid">Payé</option>
          <option value="unpaid">Impayé</option>
        </select>
      </div>
    </div>
  </div>

  <!-- List -->
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full" data-testid="invoices-table">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >Numéro</th
            >
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >Type</th
            >
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >Client</th
            >
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >Total</th
            >
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >Statut</th
            >
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >Actions</th
            >
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          {#each filteredInvoices as invoice}
            <tr data-testid="invoice-row-{invoice._id}">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {invoice.invoice_number}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                {invoice.type === "quote" ? "Devis" : "Facture"}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm"
                >{invoice.client_name}</td
              >
              <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                {invoice.total.toFixed(2)} €
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-3 py-1 rounded-full text-xs font-medium {getStatusColor(
                    invoice.status,
                  )}"
                >
                  {getStatusLabel(invoice.status)}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                <button
                  on:click={() => editInvoice(invoice)}
                  class="text-blue-600 hover:text-blue-800"
                  data-testid="edit-invoice-{invoice._id}"
                >
                  ✏️
                </button>

                <button
                  on:click={() => downloadPDF(invoice._id!)}
                  class="text-green-600 hover:text-green-800"
                  data-testid="download-pdf-{invoice._id}"
                >
                  📄
                </button>

                {#if invoice.status !== "paid"}
                  <button
                    on:click={() => updateStatus(invoice._id!, "paid")}
                    class="text-green-600 hover:text-green-800"
                    data-testid="mark-paid-{invoice._id}"
                  >
                    ✓
                  </button>
                {/if}

                <button
                  on:click={() => deleteInvoice(invoice._id!)}
                  class="text-red-600 hover:text-red-800"
                  data-testid="delete-invoice-{invoice._id}"
                >
                  🗑️
                </button>
              </td>
            </tr>
          {:else}
            <tr>
              <td colspan="6" class="px-6 py-8 text-center text-gray-500">
                Aucune facture trouvée
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
