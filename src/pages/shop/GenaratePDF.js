import React from 'react';
// import { Document, Page, Text, View, StyleSheet, PDFViewer } from 'react-pdf';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

import { ExelFileGenerate } from './ExelFileGenerate';




const tableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'nane Smith', age: 40 },
    { id: 4, name: 'bane Smith', age: 50 },
    { id: 3, name: 'Bob Johnson', age: 35 }
  ];

  const generateExcel = () => {
    ExelFileGenerate(tableData, 'table.xlsx');
  };

//   const genaratePDF = () =>{
    
//   }

const GenaratePDF = () => {
  const element = (
    <Document>
      <Page>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCellHeader}>
              <Text>ID</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text>Name</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text>Age</Text>
            </View>
          </View>
          {tableData.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>{item.id}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{item.name}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{item.age}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

//   const blob = new Blob([element], { type: 'application/pdf' });
//   const url = URL.createObjectURL(blob);
//   window.open(url);

return (
        <div>
    <PDFDownloadLink document={element} fileName="table.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
    {/* <button onClick={genaratePDF}>Download as PDF</button> */}
    <button onClick={generateExcel}>Download as Excel</button>
  </div>
  );

};

const styles = StyleSheet.create({
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 10
  },
  tableRow: {
    flexDirection: 'row'
  },
  tableCellHeader: {
    width: '33.33%',
    backgroundColor: '#CCCCCC',
    padding: 5,
    borderWidth: 1,
    borderColor: '#000000'
  },
  tableCell: {
    width: '33.33%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#000000'
  }
});

export { GenaratePDF };
