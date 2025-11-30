import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [events] = useState([
    { 
      id: 1, 
      title: 'Festival Musique', 
      date: 'SAM. 15 JANV.', 
      price: '45 MAD', 
      category: 'Concert', 
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400', 
      color: 'purple' 
    },
    { 
      id: 2, 
      title: 'Comédie au Rire', 
      date: 'VEN. 20 JANV.', 
      price: '80 MAD', 
      category: 'Spectacle', 
      image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400', 
      color: 'orange' 
    },
    { 
      id: 3, 
      title: 'Concert Jazz', 
      date: 'DIM. 22 JANV.', 
      price: '120 MAD', 
      category: 'Concert', 
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400', 
      color: 'blue' 
    },
    { 
      id: 4, 
      title: 'Conférence Tech', 
      date: 'MER. 25 JANV.', 
      price: '200 MAD', 
      category: 'Conférence', 
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', 
      color: 'purple' 
    },
    { 
      id: 5, 
      title: 'Soirée Stand-Up', 
      date: 'SAM. 28 JANV.', 
      price: '95 MAD', 
      category: 'Spectacle', 
      image: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=400', 
      color: 'pink' 
    },
    { 
      id: 6, 
      title: 'Festival Gastronomie', 
      date: 'DIM. 29 JANV.', 
      price: 'Gratuit', 
      category: 'Festival', 
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', 
      color: 'orange' 
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('Tous');

  return (
    <AppContext.Provider value={{ events, selectedCategory, setSelectedCategory }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp doit être utilisé dans AppProvider');
  }
  return context;
};