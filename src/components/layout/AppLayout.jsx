import React from 'react';
import Navbar from './Navbar';

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100"> 
      <Navbar />
      <main className="pt-20"> 
        <div className="container mx-auto py-8 px-8 sm:px-12 lg:px-24">
          {children} 
        </div>
      </main>
    </div>
  );
}

export default AppLayout; 