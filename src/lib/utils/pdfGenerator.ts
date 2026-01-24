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

// Fonction pour charger une image et la convertir en base64
async function loadImageAsBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } else {
        reject(new Error('Could not get canvas context'));
      }
    };
    img.onerror = () => reject(new Error('Could not load image'));
    img.src = url;
  });
}

export async function generateInvoicePDF(invoice: Invoice): Promise<void> {
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

  // Charger et ajouter le logo
  try {
    const logoBase64 = await loadImageAsBase64('/LOGO HERPIN CREATIVE STUDIOb_4.svg');
    // Ajouter le logo (ajuster les dimensions selon le ratio de l'image)
    doc.addImage(logoBase64, 'PNG', 15, 5, 50, 30);
  } catch (error) {
    // Si le logo ne charge pas, afficher le texte comme fallback
    console.warn('Logo could not be loaded, using text fallback');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text(COMPANY_INFO.name, 20, 25);
  }

  // Type de document
  doc.setTextColor(255, 255, 255);
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
  let currentY = finalY + 25;
  if (invoice.notes) {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...grayText);
    doc.text('Notes :', 20, currentY);
    const notesLines = doc.splitTextToSize(invoice.notes, 170);
    doc.text(notesLines, 20, currentY + 7);
    currentY += 7 + (notesLines.length * 5) + 10;
  }

  // Mentions légales - Droits d'utilisation (uniquement pour les devis)
  if (isQuote) {
    // Vérifier si on a besoin d'une nouvelle page
    const pageHeight = doc.internal.pageSize.height;
    if (currentY > pageHeight - 100) {
      doc.addPage();
      currentY = 20;
    }

    // Titre section mentions légales
    doc.setFillColor(245, 245, 250);
    doc.roundedRect(20, currentY, 170, 8, 2, 2, 'F');
    doc.setTextColor(...violetDark);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('MENTIONS LÉGALES - DROITS D\'UTILISATION', 25, currentY + 6);
    currentY += 15;

    // Contenu des mentions légales
    doc.setTextColor(...grayText);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');

    const legalMentions = [
      '1. ENGAGEMENTS DU CLIENT - PAIEMENT DES HONORAIRES',
      'En acceptant ce devis, le client s\'engage à :',
      '• Verser un acompte de 30% à la signature du devis pour démarrer le projet',
      '• Régler le solde (70%) à la livraison des fichiers finaux, avant transmission',
      '• Respecter un délai de paiement de 14 jours à compter de la date de facturation',
      '• En cas de retard : pénalités de 3 fois le taux d\'intérêt légal + indemnité forfaitaire de 40€',
      'Tout projet non réglé dans les délais pourra être suspendu sans préavis.',
      '',
      '2. PROPRIÉTÉ INTELLECTUELLE',
      'Jusqu\'au paiement intégral de la prestation, l\'ensemble des créations (logos, vidéos, illustrations, etc.) reste',
      'la propriété exclusive de Herpin Creative Studio. Aucune utilisation n\'est autorisée avant règlement complet.',
      '',
      '3. CESSION DES DROITS - LOGOS',
      'Après paiement intégral, le client acquiert les droits d\'utilisation du logo pour :',
      '• Usage commercial et promotionnel (print, web, réseaux sociaux, packaging)',
      '• Durée illimitée sur le territoire mondial',
      '• Modification interdite sans accord préalable écrit du créateur',
      'Le créateur conserve le droit de mentionner la création dans son portfolio.',
      '',
      '4. CESSION DES DROITS - VIDÉOS / MOTION DESIGN',
      'Après paiement intégral, le client acquiert les droits d\'utilisation pour :',
      '• Diffusion sur ses propres supports (site web, réseaux sociaux, présentations)',
      '• Durée illimitée sur le territoire mondial',
      '• Toute modification, montage ou utilisation commerciale pour revente nécessite un accord écrit',
      '• Les rushes et fichiers sources restent la propriété du créateur sauf mention contraire.',
      '',
      '5. CLAUSE DE RÉSERVE',
      'Le créateur se réserve le droit de refuser toute utilisation qui pourrait porter atteinte à son image',
      'ou qui serait contraire à ses valeurs (contenu discriminatoire, illégal, etc.).'
    ];

    legalMentions.forEach((line) => {
      // Vérifier si on doit passer à une nouvelle page
      if (currentY > pageHeight - 20) {
        doc.addPage();
        currentY = 20;
        // Réappliquer les styles après le saut de page
        doc.setTextColor(...grayText);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
      }

      if (/^\d+\./.test(line)) {
        doc.setFont('helvetica', 'bold');
        doc.text(line, 20, currentY);
        doc.setFont('helvetica', 'normal');
      } else if (line === '') {
        // Ligne vide = petit espace
      } else {
        doc.text(line, 20, currentY);
      }
      currentY += line === '' ? 3 : 4;
    });

    currentY += 5;
  }

  // Conditions (en bas de page ou après les mentions)
  const pageHeight = doc.internal.pageSize.height;

  // Vérifier si on a besoin d'une nouvelle page pour la signature
  if (currentY > pageHeight - 50) {
    doc.addPage();
    currentY = 20;
  }

  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);

  if (isQuote) {
    // Positionner la zone de signature
    const signatureY = Math.max(currentY + 10, pageHeight - 45);
    doc.text('Ce devis est valable 30 jours à compter de sa date d\'émission.', 20, signatureY);
    doc.text('En signant ce devis, le client accepte les conditions et mentions légales ci-dessus.', 20, signatureY + 7);
    doc.text('Bon pour accord (signature précédée de la mention "Lu et approuvé") :', 20, signatureY + 17);
    doc.setDrawColor(150, 150, 150);
    doc.line(20, signatureY + 30, 90, signatureY + 30);
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

export async function previewInvoicePDF(invoice: Invoice): Promise<string> {
  // Pour simplifier, on utilise la même fonction
  await generateInvoicePDF(invoice);
  return '';
}
