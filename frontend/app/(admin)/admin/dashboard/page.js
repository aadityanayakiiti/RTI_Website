'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import api from '@/lib/api';
import { Save, PlusCircle, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import ConfirmationModal from '@/components/admin/ConfirmationModal';

const TiptapEditor = dynamic(() => import('@/components/admin/TiptapEditor'), {
    ssr: false,
    loading: () => <p>Loading Editor...</p>,
});

// Helper functions for creating new data structures remain the same
const createNewRow = () => ({ subItemNumber: '', details: 'New Item Description', link: '<p></p>', observation: '<p></p>' });
const createNewContent = () => ({ serialNumber: 'x.x', title: 'New Content Block Title', rows: [createNewRow()] });
const createNewSection = () => ({ id: `new-section-${Date.now()}`, title: 'New Section Title', content: [createNewContent()] });

export default function DashboardPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [modalState, setModalState] = useState({ isOpen: false, onConfirm: null, title: '', message: '' });
    const [collapsedSections, setCollapsedSections] = useState({});

    const pageTopRef = useRef(null); // Ref for scrolling to the top

    useEffect(() => {
        api.get('/rti').then(response => {
            setData(response.data);
        }).catch(err => {
            setError('Failed to load RTI data.');
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const handleDataChange = (field, value, path) => {
        const newData = JSON.parse(JSON.stringify(data));
        let current = newData;
        path.slice(0, -1).forEach(key => { current = current[key]; });
        current[path.slice(-1)][field] = value;
        setData(newData);
    };
    
    // --- Add/Remove handlers remain the same ---
    const addSection = () => setData(prev => ({ ...prev, sections: [...prev.sections, createNewSection()] }));
    const removeSection = (sectionIndex) => setData(prev => ({ ...prev, sections: prev.sections.filter((_, i) => i !== sectionIndex) }));
    const addContent = (sectionIndex) => { const newData = JSON.parse(JSON.stringify(data)); newData.sections[sectionIndex].content.push(createNewContent()); setData(newData); };
    const removeContent = (sectionIndex, contentIndex) => { const newData = JSON.parse(JSON.stringify(data)); newData.sections[sectionIndex].content.splice(contentIndex, 1); setData(newData); };
    const addRow = (sectionIndex, contentIndex) => { const newData = JSON.parse(JSON.stringify(data)); newData.sections[sectionIndex].content[contentIndex].rows.push(createNewRow()); setData(newData); };
    const removeRow = (sectionIndex, contentIndex, rowIndex) => { const newData = JSON.parse(JSON.stringify(data)); newData.sections[sectionIndex].content[contentIndex].rows.splice(rowIndex, 1); setData(newData); };
    
    // --- Modal handlers remain the same ---
    const openConfirmationModal = (title, message, onConfirm) => setModalState({ isOpen: true, title, message, onConfirm });
    const closeConfirmationModal = () => setModalState({ isOpen: false, onConfirm: null, title: '', message: '' });
    const handleConfirm = () => { if (modalState.onConfirm) modalState.onConfirm(); closeConfirmationModal(); };

    const toggleSectionCollapse = (sectionId) => {
        setCollapsedSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
    };

    const handleSaveChanges = async () => {
        setSaving(true); setError(''); setSuccess('');
        try {
            await api.put('/rti', data);
            setSuccess('Data saved successfully!');
            // --- Scroll to top on save ---
            pageTopRef.current?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            setError('Failed to save data.');
            pageTopRef.current?.scrollIntoView({ behavior: 'smooth' });
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div>Loading editor...</div>;
    if (error && !data) return <div className="text-red-500">{error}</div>;

    return (
        <div ref={pageTopRef} className="scroll-mt-20"> {/* Ref for scrolling */}
            <ConfirmationModal isOpen={modalState.isOpen} onClose={closeConfirmationModal} onConfirm={handleConfirm} title={modalState.title} message={modalState.message} />
            
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-iit-gray-light/80 backdrop-blur-sm py-4 z-10 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-iit-gray-dark">RTI Content Editor</h1>
                <button onClick={handleSaveChanges} disabled={saving} className="flex items-center px-6 py-2.5 text-white font-bold rounded-lg bg-iit-maroon hover:bg-iit-maroon-dark disabled:bg-gray-400 transition-all shadow-md hover:shadow-lg">
                    <Save size={18} className="mr-2" />
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
            
            {success && <div className="mb-4 text-center p-3 rounded-lg bg-green-100 text-green-800 font-semibold animate-pulse-once">{success}</div>}
            {error && <div className="mb-4 text-center p-3 rounded-lg bg-red-100 text-red-800 font-semibold">{error}</div>}

            <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-lg border">
                     <h2 className="text-xl font-bold text-gray-700 mb-2">Main Page Title</h2>
                     <input type="text" value={data?.title || ''} onChange={(e) => setData({...data, title: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg text-xl font-semibold"/>
                </div>

                {data?.sections.map((section, sIdx) => {
                    const isCollapsed = collapsedSections[section.id];
                    return (
                        <div key={section.id || sIdx} className="bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300">
                            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                                <button onClick={() => toggleSectionCollapse(section.id)} className="flex items-center text-left flex-grow">
                                    {isCollapsed ? <ChevronRight size={24} className="mr-3 text-iit-blue"/> : <ChevronDown size={24} className="mr-3 text-iit-blue"/>}
                                    <input type="text" value={section.title} onClick={(e) => e.stopPropagation()} onChange={(e) => handleDataChange('title', e.target.value, ['sections', sIdx])} className="w-full p-2 border-transparent focus:border-gray-300 rounded-lg text-2xl font-bold text-iit-maroon bg-transparent"/>
                                </button>
                                <button onClick={() => openConfirmationModal('Delete Section', `Are you sure you want to delete "${section.title}"?`, () => removeSection(sIdx))} className="ml-4 text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-100 transition-colors"><Trash2 size={20}/></button>
                            </div>
                            
                            {!isCollapsed && (
                                <div className="p-6 space-y-6">
                                    {section.content.map((contentItem, cIdx) => (
                                        <div key={cIdx} className="p-4 border-2 border-dashed border-gray-300 rounded-lg bg-slate-50">
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <input type="text" placeholder="Serial Number (e.g., 1.1)" value={contentItem.serialNumber} onChange={(e) => handleDataChange('serialNumber', e.target.value, ['sections', sIdx, 'content', cIdx])} className="p-2 border border-gray-300 rounded-md font-semibold"/>
                                                    <input type="text" placeholder="Content Title" value={contentItem.title} onChange={(e) => handleDataChange('title', e.target.value, ['sections', sIdx, 'content', cIdx])} className="p-2 border border-gray-300 rounded-md font-semibold"/>
                                                </div>
                                                <button onClick={() => openConfirmationModal('Delete Content Block', `Are you sure you want to delete "${contentItem.title}"?`, () => removeContent(sIdx, cIdx))} className="ml-4 text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-100 transition-colors"><Trash2 size={18}/></button>
                                            </div>
                                            
                                            <div className="space-y-6 mt-4">
                                                {contentItem.rows.map((row, rIdx) => (
                                                    <div key={rIdx} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm relative">
                                                        <button onClick={() => openConfirmationModal('Delete Row', 'Are you sure you want to delete this row?', () => removeRow(sIdx, cIdx, rIdx))} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 p-1 rounded-full hover:bg-red-100 transition-colors"><Trash2 size={16}/></button>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <div>
                                                                <label className="text-sm font-bold text-gray-600 block mb-1">Item Description</label>
                                                                <input type="text" value={row.details} onChange={(e) => handleDataChange('details', e.target.value, ['sections', sIdx, 'content', cIdx, 'rows', rIdx])} className="w-full p-2 border border-gray-300 rounded-md bg-white"/>
                                                            </div>
                                                            <div>
                                                                <label className="text-sm font-bold text-gray-600 block mb-1">Sub Item No.</label>
                                                                <input type="text" value={row.subItemNumber} onChange={(e) => handleDataChange('subItemNumber', e.target.value, ['sections', sIdx, 'content', cIdx, 'rows', rIdx])} className="w-full p-2 border border-gray-300 rounded-md bg-white"/>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <label className="text-sm font-bold text-gray-600 block mb-1">Details & Links (HTML)</label>
                                                            <TiptapEditor content={row.link} onChange={(value) => handleDataChange('link', value, ['sections', sIdx, 'content', cIdx, 'rows', rIdx])} />
                                                        </div>
                                                        <div className="mt-4">
                                                            <label className="text-sm font-bold text-gray-600 block mb-1">Auditor's Observation (HTML)</label>
                                                            <TiptapEditor content={row.observation} onChange={(value) => handleDataChange('observation', value, ['sections', sIdx, 'content', cIdx, 'rows', rIdx])} />
                                                        </div>
                                                    </div>
                                                ))}
                                                <button onClick={() => addRow(sIdx, cIdx)} className="flex items-center text-sm font-medium text-iit-blue hover:text-iit-blue/80 transition-colors"><PlusCircle size={16} className="mr-1"/>Add Row</button>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={() => addContent(sIdx)} className="flex items-center py-2 px-3 rounded-md text-sm font-medium bg-slate-200 hover:bg-slate-300 transition-colors"><PlusCircle size={16} className="mr-2"/>Add Content Block</button>
                                </div>
                            )}
                        </div>
                    )
                })}
                <button onClick={addSection} className="flex items-center py-3 px-5 rounded-lg font-semibold bg-iit-blue text-white hover:bg-iit-blue/80 shadow-md hover:shadow-lg transition-all"><PlusCircle size={20} className="mr-2"/>Add New Section</button>
            </div>
        </div>
    );
}