import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-xl font-bold">DICOM Viewer Application</h1>
      </header>
      <main className="p-4">{children}</main>
      <footer className="bg-blue-500 text-white p-4 text-center mt-4">
        <p>© 2025 DICOM Viewer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
