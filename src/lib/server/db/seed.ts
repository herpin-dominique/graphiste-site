import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { projects } from './schema';

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client);

const initialProjects = [
  {
    title: 'Les Agapes',
    tag: 'Éditorial',
    tagColor: 'from-pink-500 to-violet-500',
    description: "Un projet éditorial autour de la gastronomie, mettant en valeur les saveurs et l'art culinaire.",
    sortOrder: 1,
    visible: true,
    photos: [
      '/Les-agapes/Agapes_page-0001.jpg',
      '/Les-agapes/Agapes_page-0002.jpg',
      '/Les-agapes/Agapes_page-0003.jpg',
      '/Les-agapes/Agapes_page-0004.jpg',
      '/Les-agapes/Agapes_page-0005.jpg',
      '/Les-agapes/Agapes_page-0006.jpg',
      '/Les-agapes/Agapes_page-0007.jpg',
      '/Les-agapes/Agapes_page-0008.jpg',
      '/Les-agapes/Agapes_page-0009.jpg',
      '/Les-agapes/Agapes_page-0010.jpg',
    ],
  },
  {
    title: 'Mode et Travaux',
    tag: 'Magazine',
    tagColor: 'from-amber-500 to-orange-500',
    description: "Reportage visuel et mise en page d'articles pour un magazine lifestyle.",
    sortOrder: 2,
    visible: true,
    photos: [
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0001.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0002.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0003.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0004.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0005.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0006.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0007.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0008.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0009.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0010.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0011.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0012.jpg',
      '/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0013.jpg',
      '/Mode-et-travaux/PDF fond perdu_page-0001.jpg',
      '/Mode-et-travaux/PDF fond perdu_page-0002.jpg',
      '/Mode-et-travaux/PDF fond perdu_page-0003.jpg',
      '/Mode-et-travaux/PDF fond perdu_page-0004.jpg',
      '/Mode-et-travaux/PDF fond perdu_page-0005.jpg',
    ],
  },
  {
    title: 'Penhaligons',
    tag: 'Branding',
    tagColor: 'from-emerald-500 to-teal-500',
    description: 'Univers parfumé et esthétique classique pour une marque de luxe.',
    sortOrder: 3,
    visible: true,
    photos: [
      '/penhaligons/1.jpg', '/penhaligons/2.jpg', '/penhaligons/3.jpg',
      '/penhaligons/4.jpg', '/penhaligons/5.jpg', '/penhaligons/6.jpg',
      '/penhaligons/7.jpg', '/penhaligons/8.jpg', '/penhaligons/9.jpg',
      '/penhaligons/10.jpg', '/penhaligons/11.jpg', '/penhaligons/12.jpg',
      '/penhaligons/13.jpg', '/penhaligons/14.jpg', '/penhaligons/15.jpg',
      '/penhaligons/16.jpg', '/penhaligons/17.jpg', '/penhaligons/18.jpg',
      '/penhaligons/19.png', '/penhaligons/20.png', '/penhaligons/21.png',
      '/penhaligons/22.jpg', '/penhaligons/23.jpg', '/penhaligons/24.jpg',
      '/penhaligons/25.jpg', '/penhaligons/26.jpg', '/penhaligons/27.jpg',
      '/penhaligons/28.jpg',
    ],
  },
  {
    title: 'Alvelo',
    tag: "Projet de fin d'études",
    tagColor: 'from-blue-500 to-indigo-500',
    description: 'Dossier de design structuré pour un projet de mobilité urbaine.',
    sortOrder: 4,
    visible: true,
    photos: [
      "/Alvelo/Motion - manuel d'utilisation alvelo.mp4",
      '/Alvelo/ALVELO pfe dossier_compressed_page-0010.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0032.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0033.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0034.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0035.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0036.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0037.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0038.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0039.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0040.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0041.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0042.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0043.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0044.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0045.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0046.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0047.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0048.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0049.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0050.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0051.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0052.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0053.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0054.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0055.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0056.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0057.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0058.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0059.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0060.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0061.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0062.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0063.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0064.jpg',
      '/Alvelo/ALVELO pfe dossier_compressed_page-0065.jpg',
    ],
  },
];

async function seed() {
  console.log('Seeding projects...');
  await db.insert(projects).values(initialProjects).onConflictDoNothing();
  console.log('Done! 4 projects inserted.');
  await client.end();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
