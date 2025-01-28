// App.jsx
import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";
import Download from "./pages/Download/Download";

function App() {
  const [page, setPage] = useState("home");
  const [fileData, setFileData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-950">
      <header className="bg-cyan-600 text-white p-4 text-center font-bold text-xl">
        Document Converter
      </header>
      <nav className="flex justify-center space-x-4 p-4 bg-cyan-700 text-white">
        <button className="btn" onClick={() => setPage("home")}>Home</button>
        <button className="btn" onClick={() => setPage("edit")}>Edit</button>
        <button className="btn" onClick={() => setPage("downloads")}>Downloads</button>
      </nav>
      <main className="p-4">
        {page === "home" && <Home setFileData={setFileData} />}
        {page === "edit" && <Edit fileData={fileData} setFileData={setFileData} />}
        {page === "downloads" && <Download />}
      </main>
    </div>
  );
}

export default App;