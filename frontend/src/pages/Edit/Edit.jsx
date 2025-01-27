// components/EditPage.jsx
import React, { useState } from "react";

function Edit({ fileData, setFileData }) {
  const [text, setText] = useState(fileData ? fileData.text : "");

  const handleSave = () => {
    setFileData({ ...fileData, text });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Extracted Text</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-64 border p-2 mb-4"
      ></textarea>
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}

export default Edit;
