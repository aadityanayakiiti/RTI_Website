// This file contains the complete mock dataset, structured according to the new format.
// It simulates the raw HTML strings that will come from the backend API.

export const MOCK_RTI_DATA = {
    title: "PROACTIVE DISCLOSURE OF INFORMATION PERTAINING TO THE INSTITUTE UNDER SECTION 4 OF THE RIGHT TO INFORMATION ACT, 2005",
    sections: [
        {
            id: "organisation-and-function",
            title: "Organisation and Function",
            content: [
                {
                    serialNumber: "1.1",
                    title: "Particulars of its organisation, functions and duties [Section 4(1)(b)(i)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Name and address of the Organization", link: `Indian Institute of Technology Indore,<br>Khandwa Road, Simrol,<br>Indore, Madhya Pradesh – 453552<br><a href="https://www.iiti.ac.in/page/contactus" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "Head of the Organization", link: `Prof. Suhas S. Joshi<br>Director<br>Email – director@iiti.ac.in<br>Phone – 0731-6603109<br><a href="https://www.iiti.ac.in/director" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(iii)", details: "Vision, Mission, and Key Objectives", link: `<a href="https://www.iiti.ac.in/public/storage/Mission_Vision_Objectives.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(iv)", details: "Function and duties", link: `Details are provided in Section 6 of IT Act 1961 (Page 5 and 6)<br><a href="https://www.iiti.ac.in/public/storage/act/The%20IT%20Act_1961.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(v)", details: "Organization Chart", link: `<a href="https://www.iiti.ac.in/institute-functionaries" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(vi)", details: "Any other details-the genesis, inception, formation of the department...", link: `Departments: <a href="https://www.iiti.ac.in/departments" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Link</a><br>Centers: <a href="https://www.iiti.ac.in/page/centers" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Link</a><br>Institute committees: <a href="https://www.iiti.ac.in/institute-committees" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Link</a>`, observation: "" },
                    ]
                },
                {
                    serialNumber: "1.2",
                    title: "Power and duties of its officers and employees [Section 4(1) (b)(ii)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Powers and duties of officers (administrative, financial, and judicial)", link: `Information is provided in Section 6 to 20 of IT Act 1961 (Page 5 to 10)<br><a href="https://www.iiti.ac.in/public/storage/act/The%20IT%20Act_1961.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "Power and duties of other employees", link: `<a href="https://www.iiti.ac.in/public/storage/rti/manuals/Power%20and%20Duties%20of%20Officers%20and%20employees.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(iii)", details: "Rules/ orders under which powers and duty are derived and exercised", link: `Powers and duties are derived by IT Act and IIT Indore Statutes.<br><a href="https://www.iiti.ac.in/public/storage/act/The%20IT%20Act_1961.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">IT Act</a><br><a href="https://www.iiti.ac.in/public/storage/statutes.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Statutes</a>`, observation: "" },
                        { subItemNumber: "(iv)", details: "Work allocation", link: `<a href="https://www.iiti.ac.in/institute-functionaries" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" }
                    ]
                },
                {
                    serialNumber: "1.3",
                    title: "Procedure followed in decision making process [Section 4(1)(b)(iii)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Process of decision making", link: `The procedure of decision-making process is followed in accordance with IT Act and Statutes of the Institute.<br><a href="https://www.iiti.ac.in/public/storage/rti/manuals/Decision%20Making.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                        { subItemNumber: "(ii)", details: "Final decision-making authority", link: `Board of Governors/ Director/ Deans/ Registrar/ HoDs<br><a href="https://www.iiti.ac.in/public/storage/rti/manuals/Decision%20Making.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                        { subItemNumber: "(iii)", details: "Related provisions, acts, rules etc.", link: `IT Act 1961<br>IIT Indore Statutes<br><a href="https://www.iiti.ac.in/public/storage/act/The%20IT%20Act_1961.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">IT Act</a><br><a href="https://www.iiti.ac.in/public/storage/statutes.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Statutes</a>`, observation: "" },
                        { subItemNumber: "(iv)", details: "Time limit for taking a decision if any", link: "Generally, 7 working days, however, it depends on Case-to-Case basis", observation: "" },
                        { subItemNumber: "(v)", details: "Channel of supervision and accountability", link: "Each employee has a Reporting Officer, HoD and Reviewing Officer who monitors the tasks assigned and targets achieved.", observation: "" }
                    ]
                },
                {
                    serialNumber: "1.4",
                    title: "Norms for discharge of functions [Section 4(1)(b)(iv)]",
                    rows: [
                      { subItemNumber: "(i)", details: "Nature of functions/ services offered", link: `Academic, Research, Skill Development, Entrepreneurship and technology-based consultancy. The information is available at:<br><a href="https://academic.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Academics</a><br><a href="https://rnd.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Research & Consultancy</a><br><a href="https://acefoundation.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Entrepreneurship</a>`, observation: "" },
                      { subItemNumber: "(ii)", details: "Norms/ standards for functions/ service delivery", link: `<a href="https://www.iiti.ac.in/public/storage/rti/manuals/Norms%20Standards%20for%20functions%20Service%20delivery.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                      { subItemNumber: "(iii)", details: "Process by which these services can be accessed", link: `<a href="https://www.iiti.ac.in/public/storage/rti/manuals/Norms%20Standards%20for%20functions%20Service%20delivery.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                      { subItemNumber: "(iv)", details: "Time-limit for achieving the targets", link: `<a href="https://www.iiti.ac.in/public/storage/rti/manuals/Time%20Limit%20for%20achieving%20the%20targets.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                      { subItemNumber: "(v)", details: "Process of redress of grievances", link: `Based on the Grievance, the aggrieved can write email to concerned HoD or approach any of the bodies as mentioned below:<br><a href="https://grievance.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Grievance Cell</a><br><a href="https://www.iiti.ac.in/institute-committees" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Women Cell</a><br><a href="https://icc.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">ICC</a>`, observation: ""},
                    ]
                },
                {
                    serialNumber: "1.5",
                    title: "Acts, rules, regulations, instructions, manuals and records for discharging functions[Section 4(1)(b)(v)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Title and nature of the record/ manual /instruction.", link: `Rules, regulations, instructions, manuals and records, used for discharging functions are followed in accordance with IT Act and Statutes of the Institute.<br>Go to Documents Tab at <a href='https://academic.iiti.ac.in/admission.php#' class='text-link-blue hover:underline'>academic.iiti.ac.in</a><br>GFR2017<br>Handbook for Personnel Officers<br><a href="https://www.iiti.ac.in/public/storage/act/The%20IT%20Act_1961.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">IT Act</a><br><a href="https://www.iiti.ac.in/public/storage/statutes.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Statutes</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "List of Rules, regulations, instructions manuals and records.", link: "", observation: ""},
                        { subItemNumber: "(iii)", details: "Acts/ Rules manuals etc.", link: "", observation: ""}
                    ]
                },
                {
                    serialNumber: "1.6",
                    title: "Categories of documents held by the authority under its control [Section 4(1)(b) (vi)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Categories of documents", link: `The categories of documents held by the authority is in accordance with IT Act and Statutes of the Institute.<br><a href="https://www.iiti.ac.in/public/storage/rti/manuals/Custodian%20of%20documents%20categories.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "Custodian of documents/categories", link: "", observation: ""}
                    ]
                },
                {
                    serialNumber: "1.7",
                    title: "Boards, Councils, Committees and other Bodies constituted as part of the Public Authority [Section 4(1)(b)(viii)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Name of Boards, Council, Committee etc.", link: `The Boards, Councils, Committees and other bodies are formed in accordance with IT Act and Statutes of the Institute. The minutes of Board meetings, Finance Committee, Annual Report, Convocation Report are available in the Institute website.<br><a href="https://www.iiti.ac.in/board-of-governors" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">BoG</a><br><a href="https://www.iiti.ac.in/finance-committee" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">FC</a><br><a href="https://www.iiti.ac.in/senate" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Senate</a><br><a href="https://www.iiti.ac.in/building-and-works-committee" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">BWC</a><br><a href="https://www.iiti.ac.in/institute-committees" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Other</a><br><a href="https://iiti.ac.in/page/reports" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Reports</a>`, observation: "The Boards, Councils, Committees and other bodies are formed in accordance with IT Act and Statutes of the Institute. The minutes of Board meetings, Finance Committee, Annual Report, Convocation Report are available in the Institute website." },
                        { subItemNumber: "(ii)", details: "Composition", link: "Same as 1.7 (i)", observation: ""},
                        { subItemNumber: "(iii)", details: "Dates from which constituted", link: "BoG & FC – August 25, 2023<br>Senate & BWC – January 31, 2022", observation: ""},
                        { subItemNumber: "(iv)", details: "Term/ Tenure", link: "BoG – 3 years<br>FC – 3 years<br>Senate – 2 years<br>BWC – 3 years<br>Other – 2 to 3 years", observation: ""},
                        { subItemNumber: "(v)", details: "Powers and functions", link: `Powers and duties are derived by IT Act and IIT Indore Statutes<br><a href="https://www.iiti.ac.in/public/storage/act/The%20IT%20Act_1961.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">IT Act</a><br><a href="https://www.iiti.ac.in/public/storage/statutes.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Statutes</a>`, observation: ""},
                        { subItemNumber: "(vi)", details: "Whether their meetings are open to the public?", link: "No", observation: ""},
                        { subItemNumber: "(vii)", details: "Whether the minutes of the meetings are open to the public?", link: "Yes", observation: ""},
                        { subItemNumber: "(viii)", details: "Place where the minutes if open to the public are available?", link: `<a href="https://www.iiti.ac.in/page/reports" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""}
                    ]
                },
                {
                    serialNumber: "1.8",
                    title: "Directory of officers and employees [Section 4(1) (b) (ix)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Name and designation", link: `The directory is available in the Institute Website under Connect Section and is updated monthly.<br><a href="https://directory.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "Telephone, fax and email ID", link: "", observation: ""}
                    ]
                },
                {
                    serialNumber: "1.9",
                    title: "Monthly Remuneration received by officers & employees including system of compensation [Section 4(1) (b) (x)]",
                    rows: [
                        { subItemNumber: "(i)", details: "List of employees with Gross monthly remuneration", link: `The monthly remuneration is provided in accordance with F. No. 15-4/2017-TC dated October 27, 2017 for faculty members and F. No. 15-4/2017-TC(Vol-II) dated December 29, 2017 for non-teaching staff. Further, the remuneration of non-teaching staff post wise is mentioned in the Recruitment and Promotion Norms of the Institute. Kindly refer to Recruitment and Promotion Norms at<br><a href="https://www.iiti.ac.in/administration_docs/reports_admin/IITI_RPN_2018_UPDATED.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Norms</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "System of compensation as provided in its regulations", link: "", observation: ""}
                    ]
                },
                {
                    serialNumber: "1.10",
                    title: "Name, designation and other particulars of public information officers [Section 4(1) (b) (xvi)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Name and designation of the public information officer (PIO), Assistant Public Information (s) & Appellate Authority", link: `PIO – Cdr. Sunil Kumar (Retd.), Joint Registrar, IIT Indore, pio@iiti.ac.in (0731-6603559)<br>APIO – Mr. Tapesh Parihar, Section Officer, IIT Indore, rticell@iiti.ac.in (0731-6603577)<br>Appellate Authority – Mr. S.P. Hota, Registrar, IIT Indore, registrar@iiti.ac.in (0731-6603518)<br><a href="https://www.iiti.ac.in/page/public-relations-rti" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "Address, telephone numbers and email ID of each designated official.", link: "", observation: ""}
                    ]
                },
                {
                    serialNumber: "1.11",
                    title: "No. of employees against whom Disciplinary action has been proposed/ taken (Section 4(2))",
                    rows: [
                        { subItemNumber: "(i)", details: "Pending for Minor penalty or major penalty proceedings", link: "Nil", observation: "" },
                        { subItemNumber: "(ii)", details: "Finalised for Minor penalty or major penalty proceedings", link: "Nil", observation: ""}
                    ]
                },
                {
                    serialNumber: "1.12",
                    title: "Programmes to advance understanding of RTI (Section 26)",
                    rows: [
                        { subItemNumber: "(i)", details: "Educational programmes", link: "Nil", observation: "" },
                        { subItemNumber: "(ii)", details: "Efforts to encourage public authority to participate in these programmes", link: "Nil", observation: ""},
                        { subItemNumber: "(iii)", details: "Training of CPIO/APIO", link: "Nil", observation: ""},
                        { subItemNumber: "(iv)", details: "Update & publish guidelines on RTI by the Public Authorities concerned", link: "Nil", observation: ""}
                    ]
                },
                {
                    serialNumber: "1.13",
                    title: "Transfer policy and transfer orders [F No. 1/6/2011- IR dt. 15.4.2013]",
                    rows: [
                        { subItemNumber: "", details: "Same as 1.5 (iv)", link: "The transfer policy is being included in the Recruitment and Promotion Norms which is in the draft stage.", observation: "" }
                    ]
                }
            ]
        },
        {
            id: "budget-and-programmes",
            title: "Budget and Programme",
            content: [
                 {
                    serialNumber: "2.1",
                    title: "Budget allocated to each agency including all plans, proposed expenditure and reports on disbursements made etc. [Section 4(1)(b)(xi)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Total Budget for the public authority", link: `<a href="https://www.iiti.ac.in/administration_docs/reports_admin/Allocation%20FY%202024-25.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(v)", details: "Report on disbursements made and place where the related reports are available", link: `<a href="https://www.iiti.ac.in/page/reports" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                        { subItemNumber: "(i)", details: "Information related to procurements", link: `Information relating to procurement including publication of notice/ tender enquiries, corrigenda thereon is published in the Institute Website.<br><a href="https://iiti.ac.in/tender_estate" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Tender Estate</a><br><a href="https://iiti.ac.in/tender" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Tender</a>`, observation: ""},
                    ]
                },
                {
                    serialNumber: "2.2",
                    title: "Foreign and domestic tours (F.No. 1/8/2012- IR dt. 11.9.2012)",
                    rows: [
                        { subItemNumber: "(ii)", details: "Budget", link: "On need basis", observation: ""},
                        { subItemNumber: "(iii)", details: "Foreign and domestic Tours by ministries and officials...", link: `<a href="https://www.iiti.ac.in/administration_docs/reports_admin/travel_details/2024-25.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""}
                    ]
                },
                {
                    serialNumber: "2.3",
                    title: "Manner of execution of subsidy programme [Section 4(i)(b)(xii)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Name of the programme of activity", link: `The Institute provides scholarship and Teaching Assistance to the students in accordance with the provision of Govt. of India.<br><a href="https://academic.iiti.ac.in/scholarship.php" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" }
                    ]
                },
                {
                    serialNumber: "2.4",
                    title: "Discretionary and non-discretionary grants [F. No. 1/6/2011-IR dt. 15.04.2013]",
                    rows: [
                        { subItemNumber: "(i)", details: "Discretionary and non-discretionary grants/ allocations to State Govt./ NGOs/other institutions", link: `<a href="https://www.iiti.ac.in/administration_docs/reports_admin/Allocation%20FY%202023-24.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "Annual accounts of all legal entities who are provided grants by public authorities", link: `<a href="https://iiti.ac.in/administration_docs/reports_admin/Annual%20Report/23-24.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""}
                    ]
                },
                {
                    serialNumber: "2.5",
                    title: "Particulars of recipients of concessions, permits of authorizations granted by the public authority [Section 4(1) (b) (xiii)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Concessions, permits, or authorizations granted by public authority", link: `The Institute provides scholarship and Teaching Assistance to the students in accordance with the provision of Govt. of India.<br><a href="https://academic.iiti.ac.in/scholarship.php" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "For each concession, permit or authorization granted...", link: "", observation: ""}
                    ]
                },
                {
                    serialNumber: "2.6",
                    title: "CAG & PAC paras [F No. 1/6/2011- IR dt. 15.4.2013]",
                    rows: [
                        { subItemNumber: "", details: "CAG and PAC paras and the action taken reports (ATRs)...", link: `<a href="https://iiti.ac.in/administration_docs/reports_admin/Annual%20Report/23-24.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" }
                    ]
                }
            ]
        },
        {
            id: "publicity-and-public-interface",
            title: "Publicity and Public Interface",
            content: [
                {
                    serialNumber: "3.1",
                    title: "Particulars for any arrangement for consultation with or representation by the members of the public... [Section 4(1)(b)(vii)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Relevant Acts, Rules, Forms, and other documents...", link: `The Institute is an Autonomous Body and includes members of the stake holders and external members as well in accordance with the Institute Statutes in the formulation and implementation of the policies. Relevant Acts, Rules are available at <a href="https://www.iiti.ac.in/page/downloads" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                        { subItemNumber: "(ii)", details: "Arrangements for consultation with or representation by", link: `a) The Institute is an Autonomous Body and includes members of the stake holders and external members in accordance with the Institute Statutes in the formulation and implementation of the policies.<br>b) From 09:30 hrs to 17:30 hrs on all working days<br>c) APIO – Mr. Tapesh Parihar, Section Officer, IIT Indore, rticell@iiti.ac.in (0731-6603577)`, observation: ""}
                    ]
                },
                {
                    serialNumber: "3.2",
                    title: "Are the details of policies / decisions, which affect public, informed to them. [Section 4(1) (c)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Policy decisions/ legislations taken in the previous one year", link: `The Policy decisions are taken by BoG, FC, Senate and BWC and the minutes are uploaded in the website at <a href="https://www.iiti.ac.in/page/reports" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "Outline the Public consultation process", link: "NA", observation: ""},
                        { subItemNumber: "(iii)", details: "Outline the arrangement for consultation before formulation of policy", link: "The decisions are taken based on the national policy and/ or feedback and suggestions of the stakeholders.", observation: ""}
                    ]
                },
                {
                    serialNumber: "3.3",
                    title: "Dissemination of information widely and in such form and manner which is easily accessible to the public. [Section 4(3)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Internet (website)", link: `The Institute has a website which contains most of the information in electronic form. The webpage provides information section and department wise and can be easily accessed by public.<br><a href="https://www.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" }
                    ]
                },
                {
                    serialNumber: "3.4",
                    title: "Form of accessibility of information manual/ handbook. [Section 4(1)(b)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Electronic format", link: `<a href="https://www.iiti.ac.in/administration_docs/reports_admin/Annual%20Report/23-24.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "Printed format", link: "", observation: ""}
                    ]
                },
                {
                    serialNumber: "3.5",
                    title: "Whether information manual/ handbook available free of cost or not. [Section 4(1)(b)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Free of cost", link: `Soft copy of the documents is available free of cost on the Institute website at <a href="https://www.iiti.ac.in/page/downloads" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: "" },
                        { subItemNumber: "(ii)", details: "At a reasonable cost of the medium", link: "", observation: ""}
                    ]
                }
            ]
        },
        {
            id: "e-governance",
            title: "E-Governance",
            content: [
                {
                    serialNumber: "4.1",
                    title: "Language in which Information Manual/ Handbook Available [F No. 1/6/2011-IR dt. 15.4.2013]",
                    rows: [
                        { subItemNumber: "(i)", details: "Hindi", link: `Hindi <a href="https://www.iiti.ac.in/administration_docs/reports_admin/ar_hindi/AR_2024_Hindi.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                        { subItemNumber: "(ii)", details: "English", link: `English <a href="https://www.iiti.ac.in/administration_docs/reports_admin/Annual%20Report/23-24.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                        { subItemNumber: "(iii)", details: "Vernacular/ Local Language", link: `Yes, Hindi`, observation: ""},
                    ]
                },
                {
                    serialNumber: "4.2",
                    title: "When was the information Manual/ Handbook last updated?",
                    rows: [
                        { subItemNumber: "", details: "Last date of Annual updation", link: "July 2024", observation: ""},
                    ]
                },
                {
                    serialNumber: "4.3",
                    title: "Information available in electronic form [Section 4(1)(b)(xiv)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Details of information available in electronic form", link: `The Institute has a website which contains most of the information in electronic form. The webpage provides information section and department wise and can be easily accessed by public.<br><a href="https://www.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                    ]
                },
                {
                    serialNumber: "4.4",
                    title: "Particulars of facilities available to citizen for obtaining information [Section 4(1)(b)(xv)]",
                    rows: [
                        { subItemNumber: "(i)", details: "Name & location of the facility", link: `The Institute provides round the clock information through a website at https://www.iiti.ac.in/. The Institute sou moto discloses majority of the information which can be accessed through the Institute website. In addition, specific information can be obtained through PRO at prclo@iiti.ac.in or PIO at rticell@iiti.ac.in.<br><a href="https://iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Main Site</a><br><a href="https://prclo.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">PRCLO</a>`, observation: ""},
                    ]
                },
                {
                    serialNumber: "4.5",
                    title: "Such other information as may be prescribed under section 4(i) (b)(xvii)",
                    rows: [
                        { subItemNumber: "(i)", details: "Grievance redressal mechanism", link: `Based on the Grievance, the aggrieved can write email to concerned HoD or approach any of the bodies as mentioned below:<br><a href="https://grievance.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Grievance Cell</a><br><a href="https://www.iiti.ac.in/institute-committees" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">Women Cell</a><br><a href="https://icc.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">ICC</a>`, observation: ""},
                        { subItemNumber: "(ii)", details: "List of completed schemes/ projects/ Programmes", link: `Details can be accessed under Projects Tab at <a href="https://rnd.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">R&D Site</a>`, observation: ""},
                        { subItemNumber: "(iii)", details: "List of schemes/ projects/ programme underway", link: `Details can be accessed under Projects Tab at <a href="https://rnd.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">R&D Site</a>`, observation: ""},
                        { subItemNumber: "(iv)", details: "Details of all contracts entered into including name of the contractor, amount of contract and period of completion of contract", link: `<a href="https://www.iiti.ac.in/public/storage/Tender%20Document/Service%20Contracts%20List%20%202024-2025%20%20for%20Audit.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                        { subItemNumber: "(v)", details: "Annual Report", link: `<a href="https://www.iiti.ac.in/administration_docs/reports_admin/Annual%20Report/23-24.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                        { subItemNumber: "(vi)", details: "Frequently Asked Question (FAQs)", link: `<a href="https://www.iiti.ac.in/public/storage/rti/manuals/Frequently%20Asked%20Question%20(FAQs).pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                    ]
                },
                {
                    serialNumber: "4.6",
                    title: "Receipt & Disposal of RTI applications & appeals [F.No 1/6/2011-IR dt. 15.04.2013]",
                    rows: [
                        { subItemNumber: "(i)", details: "Details of applications received and disposed", link: `From 1 April 23 to 31 March 25<br>Total Request Received: 270<br>Total Request Disposed of: 270`, observation: ""},
                        { subItemNumber: "(ii)", details: "Details of appeals received, and orders issued", link: `From 1 April 23 to 31 March 25<br>Total Request Received: 11<br>Total Request Disposed of: 11`, observation: ""},
                    ]
                },
                {
                    serialNumber: "4.7",
                    title: "Replies to questions asked in the parliament [Section 4(1)(d)(2)]",
                    rows: [
                        { subItemNumber: "", details: "Details of questions asked, and replies given", link: `<a href="https://www.iiti.ac.in/administration_docs/reports_admin/parliamentary_questions/2024-2025.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                    ]
                },
            ]
        },
        {
            id: "information-prescribed",
            title: "Information as may be prescribed",
            content: [
                 {
                    serialNumber: "5.1",
                    title: "Such other information as may be prescribed [F.No. 1/2/2016-IR dt. 17.8.2016, F No. 1/6/2011-IR dt. 15.4.2013]",
                    rows: [
                        { subItemNumber: "(i)", details: "Name & details of Current CPIOs & FAAs and Earlier CPIO & FAAs from 1.1.2015", link: `(a) FAA – Mr. S. P. Hota, Registrar<br>(b) CPIO - Cdr. Sunil Kumar (Retd.), Joint Registrar<br><br><strong>Earlier Officials</strong><br>(a) FAA – Mr. S. P. Hota, Registrar<br>(b) Prof. Nirmala Menon (CPIO)<br><a href="https://www.iiti.ac.in/page/public-relations-rti" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                        { subItemNumber: "(ii)", details: "Details of third-party audit of voluntary disclosure", link: `April 2024 <a href="https://www.iiti.ac.in/public/storage/rti/RTI_Self%20appraisal%20and%20third%20party%20audit%20report%202023-24.pdf" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Report</a>`, observation: ""},
                        { subItemNumber: "(iii)", details: "Appointment of Nodal Officers not below the rank of Joint Secretary/ Additional HoD", link: "To be appointed soon", observation: ""},
                        { subItemNumber: "(iv)", details: "Consultancy committee of key stake holders for advice on suo-motu disclosure", link: "To be appointed soon", observation: ""},
                        { subItemNumber: "(v)", details: "Committee of PIOs/FAAs with rich experience in RTI to identify frequently sought information under RTI", link: "To be appointed soon", observation: ""},
                    ]
                }
            ]
        },
        {
            id: "information-disclosed",
            title: "Information Disclosed on own Initiative",
            content: [
                {
                    serialNumber: "6.1",
                    title: "Item / information disclosed so that public have minimum resort to use of RTI Act to obtain information",
                    rows: [
                        { subItemNumber: "", details: "", link: `The Institute has a website which contains most of the information in electronic form. The webpage provides information section and department wise and can be easily accessed by public.<br><a href="https://www.iiti.ac.in/" target="_blank" rel="noopener noreferrer" class="text-link-blue hover:underline">View Link</a>`, observation: ""},
                    ]
                },
                {
                    serialNumber: "6.2",
                    title: "Guidelines for Indian Government Websites (GIGW) is followed",
                    rows: [
                        { subItemNumber: "(i)", details: "Whether STQC certification obtained and its validity.", link: "No", observation: ""},
                        { subItemNumber: "(ii)", details: "Does the website show the certificate on the Website?", link: "NA", observation: ""},
                    ]
                },
            ]
        },
        {
            id: "summary-report",
            title: "Summary Report",
            content: [
                {
                    serialNumber: "",
                    title: "",
                    rows: [
                        { subItemNumber: "1.", details: "DETAILED OBSERVATIONS:", link: "", observation: ""},
                        { subItemNumber: "2.", details: "RECOMMENDATIONS FOR IMPROVEMENT:", link: "", observation: ""},
                    ]
                }
            ]
        }
    ]
};