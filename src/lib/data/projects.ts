export type Project = {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  photos: string[];
  sortOrder: number;
  visible: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Motion Design Alvelo",
    tag: "Motion Design",
    tagColor: "from-violet-500 to-pink-500",
    description: "Manuel d'utilisation animé pour Alvelo — motion design complet avec illustrations et animation.",
    photos: ["/Alvelo/Motion - manuel d'utilisation alvelo.mp4"],
    sortOrder: 1,
    visible: true,
  },
  {
    id: 2,
    title: "Emballage parfumé et couleurs vibrantes",
    tag: "Packaging",
    tagColor: "from-pink-500 to-rose-500",
    description: "Création d'un packaging haut de gamme avec une palette de couleurs vibrantes et chaleureuses.",
    photos: ["/projets/Emballage parfumé et couleurs vibrantes.png"],
    sortOrder: 2,
    visible: true,
  },
  {
    id: 3,
    title: "Affiche Luc et Léa",
    tag: "Illustration",
    tagColor: "from-amber-400 to-orange-500",
    description: "Création d'une affiche illustrée pour le projet Luc et Léa.",
    photos: ["/projets/Affiche-luc-et-lea.png"],
    sortOrder: 3,
    visible: true,
  },
  {
    id: 4,
    title: "Canadrance",
    tag: "Branding",
    tagColor: "from-teal-400 to-cyan-500",
    description: "Identité visuelle complète pour Canadrance.",
    photos: ["/projets/canadrance.jpg"],
    sortOrder: 4,
    visible: true,
  },
  {
    id: 5,
    title: "Spike — Illustration",
    tag: "Illustration",
    tagColor: "from-amber-400 to-orange-500",
    description: "Illustration originale Spike.",
    photos: ["/projets/spike_5illustration.png"],
    sortOrder: 5,
    visible: true,
  },
  {
    id: 6,
    title: "Inspi Copilot",
    tag: "Branding",
    tagColor: "from-teal-400 to-cyan-500",
    description: "Création visuelle pour Inspi Copilot.",
    photos: ["/projets/inspicopilotlolachat.png"],
    sortOrder: 6,
    visible: true,
  },
];
