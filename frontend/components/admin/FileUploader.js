"use client";

import { useState } from "react";
import Image from "next/image";
import api from "@/lib/api";
import { UploadCloud, File, X, Loader2 } from "lucide-react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
];

export default function FileUploader({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError("File is too large. Max size is 10MB.");
      return;
    }
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError("Invalid file type. Only images and PDFs are allowed.");
      return;
    }

    setError("");
    setFile(selectedFile);

    if (selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/files/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // --- UPDATED: Pass the uploaded file data to the parent ---
      onUploadSuccess(response.data);
      handleRemoveFile();
    } catch (err) {
      const message =
        err.response?.data?.message || "Upload failed. Please try again.";
      setError(message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Upload New File</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
        />
        {!file && (
          <label htmlFor="file-upload" className="cursor-pointer">
            <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-semibold text-iit-blue">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              PDFs, PNG, JPG, GIF up to 10MB
            </p>
          </label>
        )}
        {file && (
          <div className="text-left">
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
              <div className="flex items-center gap-3">
                {preview ? (
                  <Image
                    src={preview}
                    alt="Preview"
                    className="h-12 w-12 rounded-md object-cover"
                  />
                ) : (
                  <File className="h-10 w-10 text-gray-500" />
                )}
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={handleRemoveFile}
                className="p-1 text-gray-500 hover:text-red-600"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
      <div className="mt-4">
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="w-full flex justify-center items-center py-3 px-4 text-white font-bold rounded-md bg-iit-maroon hover:bg-iit-maroon-dark disabled:bg-gray-400 transition-colors"
        >
          {uploading ? (
            <Loader2 className="animate-spin mr-2" />
          ) : (
            <UploadCloud className="mr-2" />
          )}
          {uploading ? "Uploading..." : "Upload File"}
        </button>
      </div>
    </div>
  );
}
