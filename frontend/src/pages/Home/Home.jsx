import React from "react";

function Home({ setFileData }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileData(file);
  };

  return (
    <div className="bg-[#0b081c] text-white w-[70%] mx-auto p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Upload and Convert Files</h1>
      <input
        type="file"
        className="block mb-4 border p-2"
        onChange={handleFileUpload}
      />
      <select className="block bg-[#0b081c] mb-4 border p-2">
        <option value="pdf-to-text">PDF to Text</option>
        <option value="image-to-text">Image to Text</option>
        <option value="text-to-pdf">Text to PDF</option>
      </select>
      <button className="bg-[#ff4c38] mt-10  text-white px-4 py-2 rounded shadow-lg">
        Convert
      </button>
    </div>
  );
}

export default Home;