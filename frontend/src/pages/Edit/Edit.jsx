// components/EditPage.jsx
import React, { useState } from "react";

function Edit({ fileData, setFileData }) {
  const [text, setText] = useState(fileData ? fileData.text : "");

  const handleSave = () => {
    setFileData({ ...fileData, text });
  };

  return (
    <div className="bg-[#0b081c] w-[70%] mx-auto p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Extracted Text</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-64  p-2 mb-4 bg-[#a8dadc] text-[#1d3557]"
      ></textarea>
      <button
        onClick={handleSave}
        className="bg-[#e63946] mt-10 hover:bg-pink-700 text-white px-4 py-2 rounded shadow-lg"
      >
        Save
      </button>
    </div>
  );
}

export default Edit;
