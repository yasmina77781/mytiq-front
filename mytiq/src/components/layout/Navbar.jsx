import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 
            onClick={() => navigate('/')}
            className="text-2xl font-bold text-purple-600 cursor-pointer hover:text-purple-700 transition"
          >
            🎫 MyTiq
          </h1>
          <div className="hidden md:flex gap-6 text-sm">
            <button onClick={() => navigate('/')} className="hover:text-purple-600">evenements</button>
            <button onClick={() => navigate('/')} className="hover:text-purple-600">fonctionnalités</button>
            <button onClick={() => navigate('/')} className="hover:text-purple-600">Newsletter</button>
            
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm hover:text-purple-600">s'inscrire</button>
          <button 
            onClick={() => navigate('/login')}
            className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Connexion
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;