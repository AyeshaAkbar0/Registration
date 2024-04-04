import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import termDocx from './asset/page2/doc.pdf';

function App1() {
  const [error, setError] = useState(null);

  const docs = [
    { uri: termDocx, fileType: 'docx', fileName: 'demo.docx' } // Local File
  ];

  return (
    <>
      {error && <p>Error: {error.message}</p>}
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: 1000 }}
        onError={setError}
      />
    </>
  );
}

export default App1;








    // <div className="terms-and-conditions-screen">
    //   <img src={bg} alt="Background" className="background-image" />
    //   <div className="terms-and-conditions-image">
    //     <img src={term} alt="Terms and Conditions" />
    //     <div className="pdf-container">
    //       <Document file='./asset/page2/doc.pdf'>
    //         <Page pageNumber={1} />
    //       </Document>
    //     </div>
    //   </div>
    // </div>