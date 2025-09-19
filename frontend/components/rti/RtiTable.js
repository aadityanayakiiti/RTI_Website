'use client';

import DOMPurify from 'isomorphic-dompurify';

const RtiTable = ({ subSection }) => {
    const createMarkup = (htmlContent) => ({ __html: DOMPurify.sanitize(htmlContent || '') });

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-400 shadow-lg">
            <table className="min-w-full">
                <thead className="bg-yellow-50 border-b-2 border-gray-400">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-[10%]">S. No.</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-[30%] border-l border-gray-300">Item</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-[45%] border-l border-gray-300">Details of Disclosure</th>
                        {/* <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-[15%] border-l border-gray-300">Auditor’s Observation</th> */}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                    {/* Branded section header */}
                    <tr className="bg-iit-maroon/5">
                        <td className="px-6 py-3 font-bold text-iit-maroon text-base">{subSection.serialNumber}</td>
                        {/* Colspan is now 3 to account for the 4-column layout */}
                        <td colSpan={3} className="px-6 py-3 font-bold text-iit-maroon text-base border-l border-gray-400">{subSection.title}</td>
                    </tr>
                    
                    {/* Data rows now map to the new data structure */}
                    {subSection.rows.map((row, index) => (
                        <tr key={index} className="hover:bg-sky-50/50 transition-colors duration-200">
                            <td className="px-6 py-4 align-top text-base text-iit-gray-medium whitespace-nowrap">{row.subItemNumber}</td>
                            {/* The "Item" column now uses the 'details' field from your JSON */}
                            <td className="px-6 py-4 align-top text-base font-medium text-iit-gray-dark border-l border-gray-300">{row.details}</td>
                            {/* The "Details of Disclosure" column now uses the 'link' field */}
                            <td 
                                className="px-6 py-4 align-top text-base text-iit-gray-dark prose prose-base max-w-none border-l border-gray-300"
                                dangerouslySetInnerHTML={createMarkup(row.link)}
                            />
                            {/* The "Auditor's Observation" column uses the 'observation' field */}
                            {/* <td 
                                className="px-6 py-4 align-top text-base text-iit-gray-dark prose prose-base max-w-none border-l border-gray-300"
                                dangerouslySetInnerHTML={createMarkup(row.observation)}
                            /> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RtiTable;