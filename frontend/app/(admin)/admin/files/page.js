'use client';

import { useState, useEffect, useCallback } from 'react';
import api from '@/lib/api';
import FileUploader from '@/components/admin/FileUploader';
import FileList from '@/components/admin/FileList';
import ConfirmationModal from '@/components/admin/ConfirmationModal';

export default function FilesPage() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalState, setModalState] = useState({ isOpen: false, fileId: null, fileName: '' });
    // --- NEW: State for the success message ---
    const [successMessage, setSuccessMessage] = useState('');

    const fetchFiles = useCallback(async () => {
        try {
            const response = await api.get('/files');
            setFiles(response.data);
        } catch (err) {
            setError('Failed to fetch files.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFiles();
    }, [fetchFiles]);

    // --- UPDATED: Handle the success message ---
    const handleUploadSuccess = (uploadedFile) => {
        fetchFiles(); // Re-fetch the list
        setSuccessMessage(`File "${uploadedFile.originalName}" uploaded successfully!`);
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000); // Clear the message after 3 seconds
    };

    const openDeleteModal = (fileId, fileName) => {
        setModalState({ isOpen: true, fileId, fileName });
    };

    const closeDeleteModal = () => {
        setModalState({ isOpen: false, fileId: null, fileName: '' });
    };
    
    const handleDeleteConfirm = async () => {
        if (!modalState.fileId) return;
        try {
            await api.delete(`/files/${modalState.fileId}`);
            setFiles(prevFiles => prevFiles.filter(file => file.id !== modalState.fileId));
        } catch (err) {
            setError('Failed to delete file.');
        } finally {
            closeDeleteModal();
        }
    };

    return (
        <div>
             <ConfirmationModal 
                isOpen={modalState.isOpen}
                onClose={closeDeleteModal}
                onConfirm={handleDeleteConfirm}
                title="Delete File"
                message={`Are you sure you want to permanently delete "${modalState.fileName}"? This action cannot be undone.`}
            />
            <h1 className="text-3xl font-bold text-iit-gray-dark mb-6">File Manager</h1>
            
            {/* --- NEW: Display success and error messages --- */}
            {successMessage && <div className="mb-4 text-center p-3 rounded-lg bg-green-100 text-green-800 font-semibold">{successMessage}</div>}
            {error && <p className="mb-4 text-center p-3 rounded-lg bg-red-100 text-red-800 font-semibold">{error}</p>}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                    <FileUploader onUploadSuccess={handleUploadSuccess} />
                </div>
                <div className="lg:col-span-2">
                    {loading ? (
                        <p>Loading files...</p>
                    ) : (
                        <FileList files={files} onDelete={openDeleteModal} />
                    )}
                </div>
            </div>
        </div>
    );
}