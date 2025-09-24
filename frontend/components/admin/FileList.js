"use client";

import { useState, useMemo } from "react";
import { Search, Copy, Trash2 } from "lucide-react";

export default function FileList({ files, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all"); // 'all', 'image', 'pdf'
  const [sortOrder, setSortOrder] = useState("newest"); // 'newest', 'oldest', 'size'
  const [copiedUrl, setCopiedUrl] = useState(null);

  const handleCopy = (url) => {
    // This API is only available in secure contexts (https or localhost)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url);
    } else {
      // Fallback for insecure contexts (like local network IP) or older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;

      // Hide the element
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);
      textArea.select();

      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Fallback: Unable to copy", err);
      }

      document.body.removeChild(textArea);
    }

    // UI feedback
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const filteredAndSortedFiles = useMemo(() => {
    let processedFiles = [...files];

    if (filterType !== "all") {
      processedFiles = processedFiles.filter((file) => {
        if (filterType === "image") return file.mimeType.startsWith("image/");
        if (filterType === "pdf") return file.mimeType === "application/pdf";
        return true;
      });
    }

    if (searchTerm) {
      processedFiles = processedFiles.filter((file) =>
        file.originalName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    processedFiles.sort((a, b) => {
      if (sortOrder === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortOrder === "oldest")
        return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortOrder === "size") return b.size - a.size;
      return 0;
    });

    return processedFiles;
  }, [files, searchTerm, filterType, sortOrder]);

  const FilterButton = ({ type, label }) => (
    <button
      onClick={() => setFilterType(type)}
      className={`px-3 py-1 text-sm font-medium rounded-full ${
        filterType === type
          ? "bg-iit-blue text-white"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {label}
    </button>
  );

  // Helper function to format the date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 mt-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Uploaded Files</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="relative col-span-1 md:col-span-2">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search files by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white"
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
          <option value="size">Sort by Size</option>
        </select>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <FilterButton type="all" label="All" />
        <FilterButton type="image" label="Images" />
        <FilterButton type="pdf" label="PDFs" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                File Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Type
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Size
              </th>
              {/* --- ADDED NEW COLUMN HEADER --- */}
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Date Created
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                URL
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedFiles.map((file) => (
              <tr key={file.id}>
                <td className="px-4 py-3 text-sm font-medium text-gray-800 break-all">
                  {file.originalName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {file.mimeType}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </td>
                {/* --- ADDED NEW COLUMN DATA --- */}
                <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                  {formatDate(file.createdAt)}
                </td>
                <td className="px-4 py-3 text-sm">
                  <button
                    onClick={() => handleCopy(file.url)}
                    className="flex items-center text-iit-blue hover:underline"
                  >
                    {copiedUrl === file.url ? "Copied!" : "Copy URL"}{" "}
                    <Copy size={14} className="ml-2" />
                  </button>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button
                    onClick={() => onDelete(file.id, file.originalName)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredAndSortedFiles.length === 0 && (
          <div className="text-center py-8 text-gray-500">No files found.</div>
        )}
      </div>
    </div>
  );
}
