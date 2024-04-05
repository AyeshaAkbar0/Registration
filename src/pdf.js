import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );

 export default MyDocument; 


// import React, { useEffect, useState } from 'react';
// import mammoth from 'mammoth';
// import exampleDocx from './asset/page2/term.docx'; // Path to your Word file

// function WordDocumentRenderer() {
//   const [documentText, setDocumentText] = useState('');

//   useEffect(() => {
//     async function loadDocument() {
//       const result = await mammoth.extractRawText({ arrayBuffer: exampleDocx });
//       setDocumentText(result.value);
//     }

//     loadDocument();
//   }, []);

//   return (
//     <div>
//       <h1>Word Document Content:</h1>
//       <div>{documentText}</div>
//     </div>
//   );
// }

// export default WordDocumentRenderer;
