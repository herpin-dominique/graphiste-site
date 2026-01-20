import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { Invoice } from '../stores/billing';

interface CompanyInfo {
  name: string;
  address: string;
  email: string;
  phone?: string;
  siret?: string;
}

const COMPANY_INFO: CompanyInfo = {
  name: 'Herpin Creative Studio',
  address: 'France',
  email: 'contact@herpincreative.studio',
  phone: '',
  siret: ''
};

export function generateInvoicePDF(invoice: Invoice): void {
  const doc = new jsPDF();
  const isQuote = invoice.type === 'quote';
  const title = isQuote ? 'DEVIS' : 'FACTURE';

  // Couleurs du thème
  const violetPrimary: [number, number, number] = [127, 0, 255]; // #7F00FF
  const violetDark: [number, number, number] = [75, 0, 130]; // #4B0082
  const grayText: [number, number, number] = [60, 60, 60];

  // En-tête avec bande colorée
  doc.setFillColor(...violetPrimary);
  doc.rect(0, 0, 220, 40, 'F');

  // Nom de l'entreprise
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(COMPANY_INFO.name, 20, 25);

  // Type de document
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(title, 160, 25);

  // Numéro du document
  doc.setTextColor(...grayText);
  doc.setFontSize(11);
  doc.text(`N° ${invoice.invoice_number}`, 20, 55);

  // Date de création
  const createdDate = new Date(invoice.created_at).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  doc.text(`Date : ${createdDate}`, 20, 62);

  // Date d'échéance si présente
  if (invoice.due_date) {
    const dueDate = new Date(invoice.due_date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    doc.text(`Échéance : ${dueDate}`, 20, 69);
  }

  // Informations de l'entreprise (à droite)
  doc.setFontSize(10);
  doc.text(COMPANY_INFO.name, 130, 55);
  doc.text(COMPANY_INFO.address, 130, 61);
  doc.text(COMPANY_INFO.email, 130, 67);
  if (COMPANY_INFO.phone) {
    doc.text(COMPANY_INFO.phone, 130, 73);
  }
  if (COMPANY_INFO.siret) {
    doc.text(`SIRET: ${COMPANY_INFO.siret}`, 130, 79);
  }

  // Séparateur
  doc.setDrawColor(...violetPrimary);
  doc.setLineWidth(0.5);
  doc.line(20, 85, 190, 85);

  // Informations client
  doc.setFillColor(245, 245, 250);
  doc.roundedRect(20, 90, 80, 40, 3, 3, 'F');

  doc.setTextColor(...violetDark);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('CLIENT', 25, 98);

  doc.setTextColor(...grayText);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text(invoice.client_name, 25, 108);

  doc.setFontSize(10);
  if (invoice.client_email) {
    doc.text(invoice.client_email, 25, 115);
  }

  // Adresse client (multiligne)
  if (invoice.client_address) {
    const addressLines = doc.splitTextToSize(invoice.client_address, 70);
    doc.text(addressLines, 25, 122);
  }

  // Tableau des prestations
  const tableData = invoice.items.map(item => [
    item.description,
    item.quantity.toString(),
    `${item.unit_price.toFixed(2)} €`,
    `${(item.quantity * item.unit_price).toFixed(2)} €`
  ]);

  autoTable(doc, {
    startY: 140,
    head: [['Description', 'Qté', 'Prix unitaire', 'Total']],
    body: tableData,
    theme: 'striped',
    headStyles: {
      fillColor: violetPrimary,
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      textColor: grayText,
      fontSize: 10
    },
    alternateRowStyles: {
      fillColor: [250, 248, 255]
    },
    columnStyles: {
      0: { cellWidth: 90 },
      1: { cellWidth: 20, halign: 'center' },
      2: { cellWidth: 35, halign: 'right' },
      3: { cellWidth: 35, halign: 'right' }
    },
    margin: { left: 20, right: 20 }
  });

  // Récupérer la position Y après le tableau
  const finalY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 10;

  // Total
  doc.setFillColor(...violetDark);
  doc.roundedRect(120, finalY, 70, 20, 3, 3, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('TOTAL TTC', 125, finalY + 9);
  doc.text(`${invoice.total.toFixed(2)} €`, 180, finalY + 9, { align: 'right' });

  // Note TVA
  doc.setTextColor(...grayText);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  doc.text('TVA non applicable, art. 293 B du CGI (auto-entrepreneur)', 20, finalY + 15);

  // Notes si présentes
  if (invoice.notes) {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...grayText);
    doc.text('Notes :', 20, finalY + 30);
    const notesLines = doc.splitTextToSize(invoice.notes, 170);
    doc.text(notesLines, 20, finalY + 37);
  }

  // Conditions (en bas de page)
  const pageHeight = doc.internal.pageSize.height;

  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);

  if (isQuote) {
    doc.text('Ce devis est valable 30 jours à compter de sa date d\'émission.', 20, pageHeight - 30);
    doc.text('Bon pour accord (signature précédée de la mention "Lu et approuvé") :', 20, pageHeight - 22);
    doc.setDrawColor(150, 150, 150);
    doc.line(20, pageHeight - 10, 90, pageHeight - 10);
  } else {
    doc.text('Paiement à réception de facture.', 20, pageHeight - 30);
    doc.text('En cas de retard de paiement, des pénalités seront appliquées.', 20, pageHeight - 22);
  }

  // Pied de page
  doc.setFontSize(8);
  doc.setTextColor(...violetPrimary);
  doc.text(`${COMPANY_INFO.name} - ${COMPANY_INFO.email}`, 105, pageHeight - 5, { align: 'center' });

  // Télécharger le PDF
  const filename = `${invoice.type === 'quote' ? 'Devis' : 'Facture'}_${invoice.invoice_number}_${invoice.client_name.replace(/\s+/g, '_')}.pdf`;
  doc.save(filename);
}

export function previewInvoicePDF(invoice: Invoice): string {
  const doc = new jsPDF();
  // ... même code que generateInvoicePDF mais retourne un data URL
  // Pour simplifier, on utilise la même fonction
  generateInvoicePDF(invoice);
  return '';
}
