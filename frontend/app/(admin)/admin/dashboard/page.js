'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import api from '@/lib/api';
import { Save, PlusCircle, Trash2, ChevronDown, ChevronRight, GripVertical } from 'lucide-react';
import ConfirmationModal from '@/components/admin/ConfirmationModal';

const AdvancedTiptapEditor = dynamic(() => import('@/components/admin/TiptapEditor'), {
    ssr: false,
    loading: () => <div className="p-4 border rounded-md bg-gray-100">Loading Editor...</div>,
});

const createNewRow = () => ({ subItemNumber: '', details: 'New Item Description', link: '<p></p>', observation: '<p></p>' });
const createNewContent = () => ({ serialNumber: 'x.x', title: 'New Content Block Title', rows: [createNewRow()] });
const createNewSection = () => ({ id: `section-${Date.now()}`, title: 'New Section Title', content: [createNewContent()] });

export default function DashboardPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [modalState, setModalState] = useState({ isOpen: false, onConfirm: null, title: '', message: '' });
    const [collapsed, setCollapsed] = useState({});
    const pageTopRef = useRef(null);

    useEffect(() => {
        api.get('/rti').then(response => {
            const fetchedData = response.data;
            setData(fetchedData);

            // --- NEW: Set all sections to be collapsed by default ---
            if (fetchedData && fetchedData.sections) {
                const initialCollapsedState = {};
                fetchedData.sections.forEach(section => {
                    initialCollapsedState[section.id] = true; // Set every section to collapsed
                });
                setCollapsed(initialCollapsedState);
            }
            // ---------------------------------------------------------

        }).catch(() => {
            setError('Failed to load RTI data.');
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const handleDataChange = (value, path) => {
        setData(prevData => {
            const newData = JSON.parse(JSON.stringify(prevData));
            let current = newData;
            path.slice(0, -1).forEach(key => { current = current[key]; });
            current[path.slice(-1)] = value;
            return newData;
        });
    };
    
    const addSection = () => {
        const newSection = createNewSection();
        setData(prev => ({ ...prev, sections: [...prev.sections, newSection] }));
        // --- NEW: Expand the newly created section ---
        setCollapsed(prev => ({ ...prev, [newSection.id]: false }));
    };

    const removeSection = (sIdx) => setData(prev => ({ ...prev, sections: prev.sections.filter((_, i) => i !== sIdx) }));
    const addContent = (sIdx) => setData(prev => { const d = JSON.parse(JSON.stringify(prev)); d.sections[sIdx].content.push(createNewContent()); return d; });
    const removeContent = (sIdx, cIdx) => setData(prev => { const d = JSON.parse(JSON.stringify(prev)); d.sections[sIdx].content.splice(cIdx, 1); return d; });
    const addRow = (sIdx, cIdx) => setData(prev => { const d = JSON.parse(JSON.stringify(prev)); d.sections[sIdx].content[cIdx].rows.push(createNewRow()); return d; });
    const removeRow = (sIdx, cIdx, rIdx) => setData(prev => { const d = JSON.parse(JSON.stringify(prev)); d.sections[sIdx].content[cIdx].rows.splice(rIdx, 1); return d; });
    
    const openConfirmationModal = (title, message, onConfirm) => setModalState({ isOpen: true, title, message, onConfirm });
    const closeConfirmationModal = () => setModalState({ isOpen: false });
    const handleConfirm = () => { modalState.onConfirm?.(); closeConfirmationModal(); };

    const toggleCollapse = id => setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));

    const handleSaveChanges = async () => {
        setSaving(true); setError(''); setSuccess('');
        try {
            await api.put('/rti', data);
            setSuccess('Data saved successfully!');
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
        <div ref={pageTopRef} className="scroll-mt-20">
            <ConfirmationModal isOpen={modalState.isOpen} onClose={closeConfirmationModal} onConfirm={handleConfirm} title={modalState.title} message={modalState.message} />
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-iit-gray-light/80 backdrop-blur-sm py-4 z-10 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-iit-gray-dark">RTI Content Editor</h1>
                <button onClick={handleSaveChanges} disabled={saving} className="flex items-center px-6 py-2.5 text-white font-bold rounded-lg bg-iit-maroon hover:bg-iit-maroon-dark disabled:bg-gray-400 transition-all shadow-md hover:shadow-lg">
                    <Save size={18} className="mr-2" />
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>
            {success && <div className="mb-4 text-center p-3 rounded-lg bg-green-100 text-green-800 font-semibold">{success}</div>}
            {error && <div className="mb-4 text-center p-3 rounded-lg bg-red-100 text-red-800 font-semibold">{error}</div>}
            <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-lg border">
                     <h2 className="text-xl font-bold text-gray-700 mb-2">Main Page Title</h2>
                     <input type="text" value={data?.title || ''} onChange={(e) => setData({...data, title: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg text-xl font-semibold"/>
                </div>
                {data?.sections.map((section, sIdx) => {
                    const isCollapsed = collapsed[section.id];
                    return (
                        <div key={section.id} className="bg-white rounded-xl shadow-xl border border-gray-200">
                            <header className="flex items-center p-4 border-b border-gray-200">
                                <GripVertical className="text-gray-400 cursor-grab mr-2" />
                                <button onClick={() => toggleCollapse(section.id)} className="flex items-center text-left flex-grow">
                                    {isCollapsed ? <ChevronRight size={24} className="text-iit-blue"/> : <ChevronDown size={24} className="text-iit-blue"/>}
                                    <input type="text" value={section.title} onClick={e => e.stopPropagation()} onChange={e => handleDataChange(e.target.value, ['sections', sIdx, 'title'])} className="w-full ml-3 p-1 border-transparent hover:border-gray-200 focus:border-gray-300 rounded-lg text-2xl font-bold text-iit-maroon bg-transparent"/>
                                </button>
                                <button onClick={() => openConfirmationModal('Delete Section', `Are you sure you want to delete "${section.title}"?`, () => removeSection(sIdx))} className="ml-4 text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-100"><Trash2 size={20}/></button>
                            </header>
                            {!isCollapsed && <div className="p-6 space-y-6 bg-slate-50/50">
                                {section.content.map((contentItem, cIdx) => (
                                    <div key={cIdx} className="p-4 border border-gray-300 rounded-lg bg-white shadow-md">
                                        <div className="flex justify-between items-center mb-4 pb-3 border-b">
                                            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input type="text" placeholder="Serial Number (e.g., 1.1)" value={contentItem.serialNumber} onChange={e => handleDataChange(e.target.value, ['sections', sIdx, 'content', cIdx, 'serialNumber'])} className="p-2 border border-gray-300 rounded-md font-semibold"/>
                                                <input type="text" placeholder="Content Title" value={contentItem.title} onChange={e => handleDataChange(e.target.value, ['sections', sIdx, 'content', cIdx, 'title'])} className="p-2 border border-gray-300 rounded-md font-semibold"/>
                                            </div>
                                            <button onClick={() => openConfirmationModal('Delete Content Block', `Are you sure you want to delete "${contentItem.title}"?`, () => removeContent(sIdx, cIdx))} className="ml-4 text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-100"><Trash2 size={18}/></button>
                                        </div>
                                        <div className="space-y-6 mt-4">
                                            {contentItem.rows.map((row, rIdx) => (
                                                <div key={rIdx} className="p-4 border border-gray-200 rounded-lg bg-slate-50 shadow-sm relative">
                                                    <button onClick={() => openConfirmationModal('Delete Row', 'Are you sure you want to delete this row?', () => removeRow(sIdx, cIdx, rIdx))} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 p-1 rounded-full hover:bg-red-100"><Trash2 size={16}/></button>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div><label className="text-sm font-bold text-gray-600 block mb-1">Item Description</label><input type="text" value={row.details} onChange={e => handleDataChange(e.target.value, ['sections', sIdx, 'content', cIdx, 'rows', rIdx, 'details'])} className="w-full p-2 border border-gray-300 rounded-md bg-white"/></div>
                                                        <div><label className="text-sm font-bold text-gray-600 block mb-1">Sub Item No.</label><input type="text" value={row.subItemNumber} onChange={e => handleDataChange(e.target.value, ['sections', sIdx, 'content', cIdx, 'rows', rIdx, 'subItemNumber'])} className="w-full p-2 border border-gray-300 rounded-md bg-white"/></div>
                                                    </div>
                                                    <div className="mt-4"><label className="text-sm font-bold text-gray-600 block mb-1">Details & Links (HTML)</label><AdvancedTiptapEditor content={row.link} onChange={value => handleDataChange(value, ['sections', sIdx, 'content', cIdx, 'rows', rIdx, 'link'])} /></div>
                                                    <div className="mt-4"><label className="text-sm font-bold text-gray-600 block mb-1">Auditor&apos;s Observation (HTML)</label><AdvancedTiptapEditor content={row.observation} onChange={value => handleDataChange(value, ['sections', sIdx, 'content', cIdx, 'rows', rIdx, 'observation'])} /></div>
                                                </div>
                                            ))}
                                            {contentItem.rows.length === 0 && <div className="text-center text-gray-500 p-4">No rows in this block.</div>}
                                            <button onClick={() => addRow(sIdx, cIdx)} className="flex items-center text-sm font-medium text-iit-blue hover:underline mt-4"><PlusCircle size={16} className="mr-1"/>Add Row</button>
                                        </div>
                                    </div>
                                ))}
                                {section.content.length === 0 && <div className="text-center text-gray-500 p-4">This section is empty.</div>}
                                <button onClick={() => addContent(sIdx)} className="flex items-center py-2 px-3 rounded-md text-sm font-medium bg-slate-200 hover:bg-slate-300 transition-colors"><PlusCircle size={16} className="mr-2"/>Add Content Block</button>
                            </div>}
                        </div>
                    );
                })}
                <button onClick={addSection} className="flex items-center py-3 px-5 rounded-lg font-semibold bg-iit-blue text-white hover:bg-iit-blue/80 shadow-md hover:shadow-lg transition-all"><PlusCircle size={20} className="mr-2"/>Add New Section</button>
            </div>
        </div>
    );
}