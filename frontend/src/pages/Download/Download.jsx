import React from "react";

function Download() {
  const downloads = [
    { id: 1, name: "converted-file-1.pdf", url: "/downloads/converted-file-1.pdf" },
    { id: 2, name: "converted-file-2.txt", url: "/downloads/converted-file-2.txt" },
  ];

  return (
    <div className="bg-[#0b081c] p-6 rounded-lg shadow w-[70%] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Downloads</h1>
      <ul>
        {downloads.map((file) => (
          <li key={file.id} className="mb-2">
            <a
              href={file.url}
              download
              className="text-white underline"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Download;
