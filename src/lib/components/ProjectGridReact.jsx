// src/lib/components/ProjectGridReact.jsx

import React, { useState } from 'react';

// Données statiques pour l'exemple
const initialProjects = [
  { id: 1, title: 'Branding pour une startup tech', category: 'Branding', image: 'url_vers_image_1.jpg' },
  { id: 2, title: 'Illustration pour un livre pour enfants', category: 'Illustration', image: 'url_vers_image_2.jpg' },
  { id: 3, title: 'Conception de logo pour un café', category: 'Branding', image: 'url_vers_image_3.jpg' },
  { id: 4, title: 'Affiches d’événements musicaux', category: 'Illustration', image: 'url_vers_image_4.jpg' },
];

const ProjectGridReact = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(initialProjects.map(p => p.category))];

  const filteredProjects = initialProjects.filter(project => 
    filter === 'All' || project.category === filter
  );

  return (
    <div>
      <div className="flex justify-center gap-4 mb-8">
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
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg md:text-xl font-bold text-center px-4">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGridReact;