export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  categoryColor: string;
  readingTime: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "comment-choisir-logo-entreprise",
    title: "Comment choisir un logo pour son entreprise",
    excerpt:
      "Le logo est le premier élément visuel que vos clients associent à votre marque. Découvrez les étapes clés pour créer un logo professionnel qui reflète votre identité.",
    date: "8 février 2026",
    category: "Branding",
    categoryColor: "from-pink-500 to-violet-500",
    readingTime: 5,
    content: [
      "<h2>Pourquoi un bon logo est essentiel</h2>",
      "<p>Votre logo est bien plus qu'un simple dessin : c'est la première impression que vous laissez à vos clients potentiels. Un logo professionnel inspire confiance, crédibilité et permet de vous différencier de la concurrence. Que vous lanciez votre entreprise à Caen, en Normandie ou ailleurs, investir dans un logo de qualité est une décision stratégique pour votre communication.</p>",
      "<h2>Les qualités d'un logo réussi</h2>",
      "<p><strong>Simplicité</strong> — Les logos les plus iconiques sont souvent les plus simples. Un design épuré se mémorise facilement et fonctionne sur tous les supports : carte de visite, site web, enseigne, réseaux sociaux. Pensez à Nike, Apple ou Carrefour : leur force réside dans leur simplicité.</p>",
      "<p><strong>Cohérence avec votre activité</strong> — Votre logo doit refléter votre secteur d'activité et vos valeurs. Un cabinet d'avocats n'aura pas le même univers visuel qu'une boulangerie artisanale. Les couleurs, les formes et la typographie doivent raconter votre histoire.</p>",
      "<p><strong>Intemporalité</strong> — Évitez les effets de mode trop marqués. Un bon logo doit pouvoir durer au moins 10 ans sans paraître daté. Les tendances passent, mais un logo bien pensé reste pertinent.</p>",
      "<p><strong>Polyvalence</strong> — Votre logo doit fonctionner en grand format sur une affiche comme en petit sur un favicon. Il doit être lisible en noir et blanc comme en couleur, sur fond clair comme sur fond sombre.</p>",
      "<h2>Les étapes de création d'un logo</h2>",
      "<p><strong>1. Le brief créatif</strong> — Tout commence par une discussion approfondie avec votre graphiste. Quelles sont vos valeurs ? Qui est votre cible ? Quels sont vos concurrents ? Ce brief est la fondation de tout le travail créatif.</p>",
      "<p><strong>2. La recherche et l'inspiration</strong> — Le graphiste explore votre univers, étudie la concurrence et réalise un moodboard pour définir la direction artistique : palette de couleurs, ambiance, références visuelles.</p>",
      "<p><strong>3. Les esquisses</strong> — Plusieurs pistes créatives sont explorées à la main ou sur tablette. Cette phase permet de tester différentes approches sans se limiter.</p>",
      "<p><strong>4. La finalisation</strong> — La piste retenue est affinée numériquement. Le logo est décliné en plusieurs versions (horizontal, vertical, monochrome) et livré dans tous les formats nécessaires (SVG, PNG, PDF).</p>",
      "<h2>Les erreurs à éviter</h2>",
      "<p>Ne confiez pas votre logo à un générateur automatique ou à un designer sur une plateforme low-cost. Un logo générique ne vous démarquera jamais. Évitez également d'utiliser trop de couleurs (3 maximum), des polices illisibles ou des éléments trop complexes qui perdent en lisibilité à petite taille.</p>",
      "<h2>Faire appel à un graphiste professionnel</h2>",
      "<p>Un graphiste freelance comme Herpin Creative Studio vous accompagne de A à Z dans la création de votre identité visuelle. Basée à Caen en Normandie, je propose un processus créatif personnalisé qui aboutit à un logo unique, professionnel et parfaitement adapté à votre activité. N'hésitez pas à me contacter pour discuter de votre projet.</p>",
    ],
  },
  {
    slug: "tendances-graphiques-2026",
    title: "Les tendances graphiques en 2026",
    excerpt:
      "Intelligence artificielle, typographies expressives, retour du minimalisme... Découvrez les grandes tendances du design graphique qui marqueront l'année 2026.",
    date: "5 février 2026",
    category: "Tendances",
    categoryColor: "from-amber-500 to-orange-500",
    readingTime: 6,
    content: [
      "<h2>Le design graphique en pleine mutation</h2>",
      "<p>L'année 2026 confirme une évolution majeure du design graphique, portée par les avancées technologiques et un retour aux fondamentaux créatifs. Les marques cherchent à se démarquer dans un monde visuel de plus en plus saturé. Voici les tendances qui façonnent le paysage graphique cette année.</p>",
      "<h2>1. Le minimalisme expressif</h2>",
      "<p>Le minimalisme n'est pas nouveau, mais il prend en 2026 une dimension plus expressive. On parle de <strong>\"minimalisme audacieux\"</strong> : des compositions épurées mais avec des éléments forts — une typographie imposante, une couleur vive unique, un élément graphique marquant. L'idée est de dire plus avec moins, tout en créant un impact visuel immédiat.</p>",
      "<h2>2. Typographies sur mesure</h2>",
      "<p>Les marques investissent de plus en plus dans des typographies personnalisées. Une police exclusive renforce l'identité et la reconnaissance de marque. On voit aussi le retour des typographies <strong>serif</strong> élégantes, souvent associées à des sans-serif modernes pour créer des contrastes sophistiqués. Les typographies variables (Variable Fonts) permettent des animations fluides sur le web.</p>",
      "<h2>3. L'IA comme outil créatif</h2>",
      "<p>L'intelligence artificielle générative s'intègre désormais dans le workflow des designers, non pas pour remplacer la créativité humaine, mais comme un <strong>accélérateur d'idéation</strong>. Les graphistes utilisent l'IA pour explorer des pistes créatives, générer des moodboards et expérimenter rapidement. Le résultat final reste toujours affiné et personnalisé par l'œil et la main du designer.</p>",
      "<h2>4. Le retour du fait main</h2>",
      "<p>En réaction au tout-numérique, les éléments <strong>faits à la main</strong> reviennent en force : illustrations dessinées, textures papier, typographies manuscrites, tampons, collages. Cette tendance apporte authenticité et chaleur aux supports de communication, particulièrement appréciée par les marques artisanales et les commerces locaux.</p>",
      "<h2>5. Les dégradés et la 3D</h2>",
      "<p>Les dégradés de couleurs restent très présents, mais évoluent vers des palettes plus subtiles et naturelles. Associés à des éléments 3D réalistes ou stylisés, ils créent de la profondeur et du dynamisme. Cette tendance est particulièrement visible dans le web design et les identités visuelles tech.</p>",
      "<h2>6. Le design éco-responsable</h2>",
      "<p>De plus en plus de marques intègrent des préoccupations environnementales dans leur communication visuelle. Cela se traduit par des <strong>palettes de couleurs naturelles</strong> (vert sauge, terre cuite, bleu océan), des supports imprimés sur papier recyclé, et des designs qui privilégient la sobriété et la durabilité plutôt que l'excès.</p>",
      "<h2>7. Le motion design omniprésent</h2>",
      "<p>Avec la domination des réseaux sociaux et du contenu vidéo, le motion design devient incontournable. Les logos animés, les micro-animations sur les sites web et les contenus vidéo courts (Reels, TikTok) sont des outils essentiels pour capter l'attention. Un graphiste qui maîtrise le motion design offre un avantage compétitif considérable à ses clients.</p>",
      "<h2>Comment intégrer ces tendances à votre marque</h2>",
      "<p>Il ne s'agit pas de suivre toutes les tendances, mais de choisir celles qui correspondent à votre identité et à votre cible. Un graphiste professionnel saura vous guider pour moderniser votre image tout en restant fidèle à vos valeurs. Chez Herpin Creative Studio à Caen, je vous accompagne pour donner à votre marque un look actuel et impactant.</p>",
    ],
  },
  {
    slug: "pourquoi-graphiste-freelance-caen",
    title: "Pourquoi faire appel à un graphiste freelance à Caen",
    excerpt:
      "Proximité, réactivité, créativité sur mesure... Découvrez les avantages de collaborer avec un graphiste indépendant en Normandie pour vos projets de communication.",
    date: "1 février 2026",
    category: "Conseils",
    categoryColor: "from-emerald-500 to-teal-500",
    readingTime: 4,
    content: [
      "<h2>Le freelance, un partenaire de choix pour les entreprises normandes</h2>",
      "<p>Vous êtes une entreprise, un commerce ou une association basé à Caen ou en Normandie ? Faire appel à un graphiste freelance local présente de nombreux avantages par rapport à une agence de communication classique. Voici pourquoi de plus en plus d'entrepreneurs choisissent cette option.</p>",
      "<h2>Un interlocuteur unique et dédié</h2>",
      "<p>Avec un freelance, vous travaillez directement avec la personne qui crée vos visuels. Pas d'intermédiaire, pas de chef de projet, pas de perte d'information. La communication est <strong>directe et fluide</strong>, ce qui garantit un résultat au plus proche de vos attentes. Votre graphiste connaît votre projet sur le bout des doigts.</p>",
      "<h2>Des tarifs adaptés aux petites structures</h2>",
      "<p>Un graphiste freelance n'a pas les charges d'une agence (locaux, salariés, hiérarchie). Ces économies se répercutent sur ses tarifs, rendant le design professionnel <strong>accessible aux TPE, PME, artisans et associations</strong>. Vous bénéficiez d'un travail de qualité agence à un prix adapté à votre budget.</p>",
      "<h2>La proximité géographique, un vrai plus</h2>",
      "<p>Travailler avec un graphiste basé à Caen, c'est pouvoir se rencontrer facilement pour discuter de votre projet autour d'un café. Cette <strong>proximité facilite les échanges</strong> et permet de mieux comprendre votre activité, votre clientèle locale et votre environnement. Un graphiste normand connaît le tissu économique local et saura adapter sa création.</p>",
      "<h2>Réactivité et flexibilité</h2>",
      "<p>Un freelance est généralement plus <strong>réactif</strong> qu'une agence. Pas de process lourd, pas de validation en cascade. Les modifications sont rapides, les délais de livraison courts. Si vous avez un besoin urgent (une affiche pour un événement, un post Instagram de dernière minute), votre graphiste freelance peut s'adapter rapidement.</p>",
      "<h2>Une créativité sans limites</h2>",
      "<p>Contrairement à une agence qui peut avoir un \"style maison\", un graphiste freelance adapte son approche créative à chaque client. Chaque projet est unique et traité comme tel. Vous obtenez un résultat <strong>100% personnalisé</strong>, qui ne ressemble à aucun autre.</p>",
      "<h2>Quels services propose un graphiste freelance ?</h2>",
      "<p>Un graphiste freelance polyvalent comme Herpin Creative Studio propose une palette complète de services :</p>",
      "<ul><li><strong>Identité visuelle</strong> : logo, charte graphique, déclinaisons</li><li><strong>Supports de communication</strong> : affiches, flyers, brochures, cartes de visite</li><li><strong>Web & digital</strong> : bannières, visuels réseaux sociaux, newsletters</li><li><strong>Motion design</strong> : animations, vidéos promotionnelles, logos animés</li><li><strong>Illustration</strong> : illustrations sur mesure pour l'édition ou le packaging</li></ul>",
      "<h2>Herpin Creative Studio, votre graphiste à Caen</h2>",
      "<p>Basée à Giberville, aux portes de Caen, je suis Lola Herpin, graphiste et motion designer freelance. J'accompagne les entreprises, commerces et associations de Normandie dans la création de leur identité visuelle et de leurs supports de communication. Mon objectif : donner vie à vos idées avec un design professionnel, créatif et impactant. Contactez-moi pour discuter de votre projet !</p>",
    ],
  },
];
