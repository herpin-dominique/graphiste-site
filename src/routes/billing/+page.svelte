<script lang="ts">
  import { onMount } from 'svelte';
  import { isAuthenticated, authStore } from '$lib/stores/auth';
  import { billingStore, generateInvoiceNumber, type Invoice, type InvoiceItem } from '$lib/stores/billing';
  import { generateInvoicePDF } from '$lib/utils/pdfGenerator';
  import LoginForm from '$lib/components/LoginForm.svelte';
  import SendHistory from '$lib/components/SendHistory.svelte';
  import { LogOut, Plus, FileText, Download, Send, Bell, Trash2, Pencil, X, History, CircleCheck } from 'lucide-svelte';

  let showForm = false;
  let editingInvoice: Invoice | null = null;
  let showHistoryModal = false;
  let selectedInvoice: Invoice | null = null;

  // Form data
  let formData = getEmptyFormData();

  function getEmptyFormData() {
    return {
      type: 'quote' as 'quote' | 'invoice',
      invoice_number: '',
      client_name: '',
      client_email: '',
      client_address: '',
      items: [{ description: '', quantity: 1, unit_price: 0 }] as InvoiceItem[],
      total: 0,
      status: 'draft' as 'draft' | 'sent' | 'paid' | 'unpaid',
      due_date: '',
      notes: ''
    };
  }

  let filterType: 'all' | 'quote' | 'invoice' = 'all';
  let filterStatus: 'all' | 'draft' | 'sent' | 'paid' | 'unpaid' = 'all';

  // Actions de suivi
  let showSendModal = false;
  let sendNote = '';
  let sendType: 'sent' | 'reminder' = 'sent';

  onMount(() => {
    authStore.checkSession();
  });

  function addItem() {
    formData.items = [
      ...formData.items,
      { description: '', quantity: 1, unit_price: 0 }
    ];
  }

  function removeItem(index: number) {
    formData.items = formData.items.filter((_, i) => i !== index);
    calculateTotal();
  }

  function calculateTotal() {
    formData.total = formData.items.reduce(
      (sum, item) => sum + item.quantity * item.unit_price,
      0
    );
  }

  function submitForm() {
    calculateTotal();

    if (editingInvoice) {
      billingStore.update(editingInvoice.id, {
        type: formData.type,
        invoice_number: formData.invoice_number,
        client_name: formData.client_name,
        client_email: formData.client_email,
        client_address: formData.client_address,
        items: formData.items,
        total: formData.total,
        status: formData.status,
        due_date: formData.due_date || undefined,
        notes: formData.notes || undefined
      });
    } else {
      billingStore.add({
        type: formData.type,
        invoice_number: formData.invoice_number || generateInvoiceNumber(formData.type),
        client_name: formData.client_name,
        client_email: formData.client_email,
        client_address: formData.client_address,
        items: formData.items,
        total: formData.total,
        status: formData.status,
        due_date: formData.due_date || undefined,
        notes: formData.notes || undefined
      });
    }

    resetForm();
    showForm = false;
  }

  function resetForm() {
    formData = getEmptyFormData();
    editingInvoice = null;
  }

  function editInvoice(invoice: Invoice) {
    editingInvoice = invoice;
    formData = {
      type: invoice.type,
      invoice_number: invoice.invoice_number,
      client_name: invoice.client_name,
      client_email: invoice.client_email,
      client_address: invoice.client_address,
      items: [...invoice.items],
      total: invoice.total,
      status: invoice.status,
      due_date: invoice.due_date || '',
      notes: invoice.notes || ''
    };
    showForm = true;
  }

  function deleteInvoice(id: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      billingStore.delete(id);
    }
  }

  function downloadPDF(invoice: Invoice) {
    generateInvoicePDF(invoice);
  }

  function openSendModal(invoice: Invoice, type: 'sent' | 'reminder') {
    selectedInvoice = invoice;
    sendType = type;
    sendNote = '';
    showSendModal = true;
  }

  function confirmSend() {
    if (!selectedInvoice) return;

    if (sendType === 'sent') {
      billingStore.markAsSent(selectedInvoice.id, sendNote || undefined);
    } else {
      billingStore.addReminder(selectedInvoice.id, sendNote || undefined);
    }

    showSendModal = false;
    selectedInvoice = null;
    sendNote = '';
  }

  function markAsPaid(id: string) {
    billingStore.updateStatus(id, 'paid');
  }

  function openHistory(invoice: Invoice) {
    selectedInvoice = invoice;
    showHistoryModal = true;
  }

  function startNewInvoice() {
    resetForm();
    formData.invoice_number = generateInvoiceNumber(formData.type);
    showForm = true;
  }

  $: filteredInvoices = $billingStore.filter((inv) => {
    const typeMatch = filterType === 'all' || inv.type === filterType;
    const statusMatch = filterStatus === 'all' || inv.status === filterStatus;
    return typeMatch && statusMatch;
  });

  function getStatusColor(status: string) {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'unpaid':
        return 'bg-red-100 text-red-800';
      case 'sent':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  function getStatusLabel(status: string) {
    switch (status) {
      case 'paid':
        return 'Payé';
      case 'unpaid':
        return 'Impayé';
      case 'sent':
        return 'Envoyé';
      default:
        return 'Brouillon';
    }
  }

  // Mettre à jour le numéro quand le type change
  $: if (!editingInvoice && showForm) {
    formData.invoice_number = generateInvoiceNumber(formData.type);
  }
</script>

<svelte:head>
  <title>Facturation - Herpin Creative Studio</title>
</svelte:head>

{#if !$isAuthenticated}
  <LoginForm />
{:else}
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
    <div class="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-8">
      <!-- Header -->
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 md:mb-14">
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Facturation</h1>
          <p class="text-gray-500 mt-2 md:mt-3 text-lg md:text-xl">Gestion des devis et factures</p>
        </div>
        <div class="flex items-center gap-4 relative z-[60]">
          <button
            type="button"
            on:click={startNewInvoice}
            class="flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white
                   px-6 md:px-8 py-3 md:py-4 rounded-xl text-lg md:text-xl font-semibold
                   hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-violet-500/30
                   transform hover:scale-105 cursor-pointer"
          >
            <Plus class="w-6 h-6 md:w-7 md:h-7" />
            Nouveau devis
          </button>
          <button
            on:click={() => authStore.logout()}
            class="flex items-center gap-2 px-4 md:px-5 py-3 md:py-4 text-gray-500 hover:text-gray-700
                   hover:bg-white/80 rounded-xl transition-all text-lg"
            title="Déconnexion"
          >
            <LogOut class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Form Modal -->
      {#if showForm}
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl my-8">
            <div class="flex items-center justify-between p-6 border-b">
              <h2 class="text-xl font-bold text-gray-800">
                {editingInvoice ? 'Modifier' : 'Créer'} un {formData.type === 'quote' ? 'devis' : 'facture'}
              </h2>
              <button
                on:click={() => { resetForm(); showForm = false; }}
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X class="w-5 h-5" />
              </button>
            </div>

            <form on:submit|preventDefault={submitForm} class="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <!-- Type & Numéro -->
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="invoice-type" class="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    id="invoice-type"
                    bind:value={formData.type}
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                           bg-white text-gray-900
                           focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  >
                    <option value="quote">Devis</option>
                    <option value="invoice">Facture</option>
                  </select>
                </div>

                <div>
                  <label for="invoice-number" class="block text-sm font-medium text-gray-700 mb-2">
                    Numéro
                  </label>
                  <input
                    id="invoice-number"
                    type="text"
                    bind:value={formData.invoice_number}
                    placeholder="DEV-2025-001"
                    required
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                           bg-white text-gray-900 placeholder-gray-400
                           focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
              </div>

              <!-- Client Info -->
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="client-name" class="block text-sm font-medium text-gray-700 mb-2">
                    Nom du client
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    bind:value={formData.client_name}
                    required
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                           bg-white text-gray-900 placeholder-gray-400
                           focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label for="client-email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email du client
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    bind:value={formData.client_email}
                    required
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                           bg-white text-gray-900 placeholder-gray-400
                           focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
              </div>

              <div>
                <label for="client-address" class="block text-sm font-medium text-gray-700 mb-2">
                  Adresse du client
                </label>
                <textarea
                  id="client-address"
                  bind:value={formData.client_address}
                  rows="2"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                         bg-white text-gray-900 placeholder-gray-400
                         focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                ></textarea>
              </div>

              <!-- Items -->
              <div>
                <div class="flex justify-between items-center mb-4">
                  <span class="block text-sm font-medium text-gray-700">
                    Lignes de facturation
                  </span>
                  <button
                    type="button"
                    on:click={addItem}
                    class="text-violet-600 hover:text-violet-700 font-medium text-sm flex items-center gap-1"
                  >
                    <Plus class="w-4 h-4" />
                    Ajouter une ligne
                  </button>
                </div>

                <div class="space-y-3">
                  {#each formData.items as item, index}
                    <div class="grid grid-cols-12 gap-2 items-end">
                      <div class="col-span-12 md:col-span-6">
                        <input
                          type="text"
                          bind:value={item.description}
                          placeholder="Description"
                          required
                          class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm
                                 bg-white text-gray-900 placeholder-gray-400
                                 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        />
                      </div>

                      <div class="col-span-4 md:col-span-2">
                        <input
                          type="number"
                          bind:value={item.quantity}
                          on:input={calculateTotal}
                          min="1"
                          placeholder="Qté"
                          required
                          class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center
                                 bg-white text-gray-900 placeholder-gray-400
                                 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        />
                      </div>

                      <div class="col-span-6 md:col-span-3">
                        <input
                          type="number"
                          bind:value={item.unit_price}
                          on:input={calculateTotal}
                          min="0"
                          step="0.01"
                          placeholder="Prix €"
                          required
                          class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm
                                 bg-white text-gray-900 placeholder-gray-400
                                 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        />
                      </div>

                      <div class="col-span-2 md:col-span-1">
                        {#if formData.items.length > 1}
                          <button
                            type="button"
                            on:click={() => removeItem(index)}
                            class="w-full p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                          >
                            <Trash2 class="w-4 h-4 mx-auto" />
                          </button>
                        {/if}
                      </div>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- Total -->
              <div class="bg-violet-50 p-4 rounded-lg">
                <div class="flex justify-between items-center text-xl font-bold text-violet-900">
                  <span>Total:</span>
                  <span>{formData.total.toFixed(2)} €</span>
                </div>
              </div>

              <!-- Status & Due Date -->
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="invoice-status" class="block text-sm font-medium text-gray-700 mb-2">
                    Statut
                  </label>
                  <select
                    id="invoice-status"
                    bind:value={formData.status}
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                           bg-white text-gray-900
                           focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="sent">Envoyé</option>
                    <option value="paid">Payé</option>
                    <option value="unpaid">Impayé</option>
                  </select>
                </div>

                <div>
                  <label for="due-date" class="block text-sm font-medium text-gray-700 mb-2">
                    Date d'échéance
                  </label>
                  <input
                    id="due-date"
                    type="date"
                    bind:value={formData.due_date}
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                           bg-white text-gray-900
                           focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
              </div>

              <!-- Notes -->
              <div>
                <label for="notes" class="block text-sm font-medium text-gray-700 mb-2">
                  Notes (optionnel)
                </label>
                <textarea
                  id="notes"
                  bind:value={formData.notes}
                  rows="2"
                  placeholder="Notes internes ou conditions particulières..."
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                         bg-white text-gray-900 placeholder-gray-400
                         focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                ></textarea>
              </div>

              <!-- Buttons -->
              <div class="flex gap-3 pt-4 border-t">
                <button
                  type="submit"
                  class="flex-1 py-3 bg-violet-600 text-white font-medium rounded-lg
                         hover:bg-violet-700 transition-colors"
                >
                  {editingInvoice ? 'Mettre à jour' : 'Créer'}
                </button>
                <button
                  type="button"
                  on:click={() => { resetForm(); showForm = false; }}
                  class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      {/if}

      <!-- Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          <div class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">{$billingStore.length}</div>
          <div class="text-base md:text-lg text-gray-500 mt-2">Total documents</div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100">
          <div class="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
            {$billingStore.filter(i => i.status === 'sent').length}
          </div>
          <div class="text-base md:text-lg text-gray-500 mt-2">En attente</div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-green-100">
          <div class="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600">
            {$billingStore.filter(i => i.status === 'paid').length}
          </div>
          <div class="text-base md:text-lg text-gray-500 mt-2">Payés</div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-violet-100">
          <div class="text-3xl md:text-4xl lg:text-5xl font-bold text-violet-600">
            {$billingStore.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.total, 0).toFixed(0)} €
          </div>
          <div class="text-base md:text-lg text-gray-500 mt-2">Total encaissé</div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 md:mb-12 border border-gray-100">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Filtres</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label for="filter-type" class="block text-base md:text-lg font-medium text-gray-700 mb-3">
              Type de document
            </label>
            <select
              id="filter-type"
              bind:value={filterType}
              class="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl bg-gray-50
                     focus:ring-4 focus:ring-violet-500/30 focus:border-violet-500 transition-all"
            >
              <option value="all">Tous les documents</option>
              <option value="quote">Devis uniquement</option>
              <option value="invoice">Factures uniquement</option>
            </select>
          </div>

          <div>
            <label for="filter-status" class="block text-base md:text-lg font-medium text-gray-700 mb-3">
              Statut
            </label>
            <select
              id="filter-status"
              bind:value={filterStatus}
              class="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl bg-gray-50
                     focus:ring-4 focus:ring-violet-500/30 focus:border-violet-500 transition-all"
            >
              <option value="all">Tous les statuts</option>
              <option value="draft">Brouillon</option>
              <option value="sent">Envoyé</option>
              <option value="paid">Payé</option>
              <option value="unpaid">Impayé</option>
            </select>
          </div>
        </div>
      </div>

      <!-- List -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div class="p-6 md:p-8 border-b border-gray-100">
          <h2 class="text-xl md:text-2xl font-bold text-gray-800">Documents</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 md:px-8 py-5 text-left text-sm md:text-base font-bold text-gray-600 uppercase tracking-wider">
                  Numéro
                </th>
                <th class="px-6 md:px-8 py-5 text-left text-sm md:text-base font-bold text-gray-600 uppercase tracking-wider">
                  Type
                </th>
                <th class="px-6 md:px-8 py-5 text-left text-sm md:text-base font-bold text-gray-600 uppercase tracking-wider">
                  Client
                </th>
                <th class="px-6 md:px-8 py-5 text-left text-sm md:text-base font-bold text-gray-600 uppercase tracking-wider">
                  Total
                </th>
                <th class="px-6 md:px-8 py-5 text-left text-sm md:text-base font-bold text-gray-600 uppercase tracking-wider">
                  Statut
                </th>
                <th class="px-6 md:px-8 py-5 text-left text-sm md:text-base font-bold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              {#each filteredInvoices as invoice}
                <tr class="hover:bg-violet-50/50 transition-colors">
                  <td class="px-6 md:px-8 py-5 md:py-6 whitespace-nowrap">
                    <span class="font-bold text-lg md:text-xl text-gray-900">{invoice.invoice_number}</span>
                    <div class="text-sm md:text-base text-gray-500 mt-1">
                      {new Date(invoice.created_at).toLocaleDateString('fr-FR')}
                    </div>
                  </td>
                  <td class="px-6 md:px-8 py-5 md:py-6 whitespace-nowrap">
                    <span class="inline-flex items-center gap-2 text-base md:text-lg text-gray-700">
                      <FileText class="w-5 h-5 md:w-6 md:h-6" />
                      {invoice.type === 'quote' ? 'Devis' : 'Facture'}
                    </span>
                  </td>
                  <td class="px-6 md:px-8 py-5 md:py-6">
                    <div class="font-semibold text-lg md:text-xl text-gray-900">{invoice.client_name}</div>
                    <div class="text-base text-gray-500">{invoice.client_email}</div>
                  </td>
                  <td class="px-6 md:px-8 py-5 md:py-6 whitespace-nowrap">
                    <span class="font-bold text-xl md:text-2xl text-gray-900">{invoice.total.toFixed(2)} €</span>
                  </td>
                  <td class="px-6 md:px-8 py-5 md:py-6 whitespace-nowrap">
                    <span class="px-4 py-2 rounded-full text-sm md:text-base font-semibold {getStatusColor(invoice.status)}">
                      {getStatusLabel(invoice.status)}
                    </span>
                  </td>
                  <td class="px-6 md:px-8 py-5 md:py-6 whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <button
                        on:click={() => editInvoice(invoice)}
                        class="p-3 text-gray-500 hover:text-violet-600 hover:bg-violet-100 rounded-xl transition-all"
                        title="Modifier"
                      >
                        <Pencil class="w-5 h-5 md:w-6 md:h-6" />
                      </button>

                      <button
                        on:click={() => downloadPDF(invoice)}
                        class="p-3 text-gray-500 hover:text-green-600 hover:bg-green-100 rounded-xl transition-all"
                        title="Télécharger PDF"
                      >
                        <Download class="w-5 h-5 md:w-6 md:h-6" />
                      </button>

                      <button
                        on:click={() => openHistory(invoice)}
                        class="p-3 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-xl transition-all"
                        title="Historique"
                      >
                        <History class="w-5 h-5 md:w-6 md:h-6" />
                      </button>

                      {#if invoice.status === 'draft'}
                        <button
                          on:click={() => openSendModal(invoice, 'sent')}
                          class="p-3 text-gray-500 hover:text-violet-600 hover:bg-violet-100 rounded-xl transition-all"
                          title="Marquer comme envoyé"
                        >
                          <Send class="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      {/if}

                      {#if invoice.status === 'sent'}
                        <button
                          on:click={() => openSendModal(invoice, 'reminder')}
                          class="p-3 text-gray-500 hover:text-orange-600 hover:bg-orange-100 rounded-xl transition-all"
                          title="Envoyer une relance"
                        >
                          <Bell class="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      {/if}

                      {#if invoice.status !== 'paid'}
                        <button
                          on:click={() => markAsPaid(invoice.id)}
                          class="p-3 text-gray-500 hover:text-green-600 hover:bg-green-100 rounded-xl transition-all"
                          title="Marquer comme payé"
                        >
                          <CircleCheck class="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      {/if}

                      <button
                        on:click={() => deleteInvoice(invoice.id)}
                        class="p-3 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-xl transition-all"
                        title="Supprimer"
                      >
                        <Trash2 class="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                    </div>
                  </td>
                </tr>
              {:else}
                <tr>
                  <td colspan="6" class="px-8 py-20 text-center">
                    <FileText class="w-20 h-20 mx-auto text-gray-300 mb-6" />
                    <p class="text-xl md:text-2xl text-gray-500 mb-4">Aucun document trouvé</p>
                    <button
                      on:click={startNewInvoice}
                      class="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white
                             text-lg font-semibold rounded-xl hover:from-violet-500 hover:to-purple-500
                             transition-all shadow-lg"
                    >
                      Créer votre premier devis
                    </button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Send/Reminder Modal -->
  {#if showSendModal && selectedInvoice}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div class="p-6">
          <h3 class="text-lg font-bold text-gray-800 mb-4">
            {sendType === 'sent' ? 'Marquer comme envoyé' : 'Envoyer une relance'}
          </h3>
          <p class="text-gray-600 mb-4">
            Document : <strong>{selectedInvoice.invoice_number}</strong>
          </p>

          <div class="mb-4">
            <label for="send-note" class="block text-sm font-medium text-gray-700 mb-2">
              Note (optionnel)
            </label>
            <textarea
              id="send-note"
              bind:value={sendNote}
              rows="3"
              placeholder="Ex: Envoyé par email le..."
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            ></textarea>
          </div>

          <div class="flex gap-3">
            <button
              on:click={confirmSend}
              class="flex-1 py-2.5 bg-violet-600 text-white font-medium rounded-lg
                     hover:bg-violet-700 transition-colors"
            >
              Confirmer
            </button>
            <button
              on:click={() => { showSendModal = false; selectedInvoice = null; }}
              class="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- History Modal -->
  {#if showHistoryModal && selectedInvoice}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
        <div class="flex items-center justify-between p-6 border-b">
          <div>
            <h3 class="text-lg font-bold text-gray-800">Historique</h3>
            <p class="text-sm text-gray-500">{selectedInvoice.invoice_number}</p>
          </div>
          <button
            on:click={() => { showHistoryModal = false; selectedInvoice = null; }}
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="p-6 overflow-y-auto max-h-[60vh]">
          <SendHistory events={selectedInvoice.send_history} />
        </div>
      </div>
    </div>
  {/if}
{/if}
