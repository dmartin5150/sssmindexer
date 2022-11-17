import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Indexer from "./component/indexer";

// import { Document, Page } from "react-pdf";
import pdf from "./sample.pdf";

import "./App.css";

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const initialIndex = {
    start:'1',
    end:'3',
    docType:'2'
  }

  return (
    <div className="App">
      { <Indexer key='1' index={initialIndex}/>}
      {/* <header className="app-header"></header> */} */}
      {/* <header className="App-header">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="500" pageNumber={1} />
        </Document>
        <p>{pageNumber} of {numPage}</p>
      </header> */}
      <center>
        <div className="document-container">
          <Document file={pdf}  onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => {
              return (
                <div key={`${index + 1}`}>
                  <Page
                    pageNumber={index + 1}
                  />
                  <p>{index + 1}</p>
                </div>
              );
            })}
          </Document>
        </div>
      </center>
    </div>
  );
}

export default App;
