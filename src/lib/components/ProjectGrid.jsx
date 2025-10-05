import React, { useState } from 'react';

// Données statiques pour les projets. Vous pouvez les remplacer par des données réelles.
const initialProjects = [
  { 
    id: 1, 
    title: 'Branding pour une startup tech', 
    category: 'Branding', 
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 2, 
    title: 'Illustration pour un livre pour enfants', 
    category: 'Illustration', 
    image: 'https://images.unsplash.com/photo-1598075323565-d6d678619726?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 3, 
    title: 'Conception de logo pour un café', 
    category: 'Branding', 
    image: 'https://images.unsplash.com/photo-1579546314316-e56598c20173?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 4, 
    title: 'Affiches d’événements musicaux', 
    category: 'Illustration', 
    image: 'https://images.unsplash.com/photo-1549495146-2495b58399e5?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 5, 
    title: 'Design de produit', 
    category: 'Design', 
    image: 'https://images.unsplash.com/photo-1606709968433-f661a3d6ef29?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 6, 
    title: 'Identité de marque pour une agence', 
    category: 'Branding', 
    image: 'https://images.unsplash.com/photo-1620202996590-48201200259f?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
];

const ProjectGrid = () => {
  const [filter, setFilter] = useState('All');
  // Crée un tableau unique de catégories à partir des projets
  const categories = ['All', ...new Set(initialProjects.map(p => p.category))];

  const filteredProjects = initialProjects.filter(project => 
    filter === 'All' || project.category === filter
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
              filter === cat ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="relative overflow-hidden rounded-lg shadow-lg group">
            <img src={project.image} alt={project.title} className="w-full h-auto transform transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <h3 className="text-white text-lg md:text-xl font-bold text-center">{project.title}</h3>
              <span className="text-sm text-gray-300 mt-2">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;