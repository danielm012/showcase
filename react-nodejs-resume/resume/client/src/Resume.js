//import './Resume.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Very important for Styling
import Menu from './NavBar';
import { Document, Page,pdfjs } from 'react-pdf';
import React, { useState } from 'react';
import './App.css';

function Resume() {
   pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
     const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
      const [pdfData, setPdfData] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    }

  return (
         <div>
           <Menu />
           <Document className="PDFResume"
               file="/Resume/resume.pdf"
               onLoadSuccess={onDocumentLoadSuccess}
            >
               <Page pageNumber={pageNumber} />
            </Document>
      </div>
  );
}

export default Resume;
