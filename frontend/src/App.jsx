// App.jsx
import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";
import Download from "./pages/Download/Download";

function App() {
  const [page, setPage] = useState("home");
  const [fileData, setFileData] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-100">
      <header className="bg-[#0b081c] text-white p-4 text-center flex justify-between font-bold text-xl">
        <h1 className="ml-10 text-3xl text-[#ff4c38]">Mago DOC</h1>
      <nav className="flex justify-center space-x-4 p-4  text-white">
        <button className="btn" onClick={() => setPage("home")}>Home</button>
        <button className="btn" onClick={() => setPage("edit")}>Edit</button>
        <button className="btn" onClick={() => setPage("downloads")}>Downloads</button>
      </nav>
      </header>
      <main className="p-4">
        {page === "home" && <Home setFileData={setFileData} />}
        {page === "edit" && <Edit fileData={fileData} setFileData={setFileData} />}
        {page === "downloads" && <Download />}
      </main>
    </div>
  );
}

export default App;