import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const Test2 = () => {

    // const { data: products = [], refetch } = useQuery({
    //     queryKey: ['/download-pdf'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/download-pdf')
    //         const data = await res.json();
    //         // const data = await res.download();
    //         return data;
    //     },
    // })
    // console.log(products);

    const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await fetch('http://localhost:5000/api/v1/brand');
    const json = await response.json();
    setData(json.data);
  };
  console.log(data);

  const downloadPDF = async () => {
    const response = await fetch('http://localhost:5000/download-pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };


  // function downloadPDF() {
  //   fetch('http://localhost:5000/download-pdf')
  //     .then(function(response) {
  //       return response.blob();
  //     })
  //     .then(function(blob) {
  //       var url = window.URL.createObjectURL(new Blob([blob]));
  //       var link = document.createElement('a');
  //       link.href = url;
  //       link.setAttribute('download', 'data.csv');
  //       document.body.appendChild(link);
  //       link.click();
  //       link.parentNode.removeChild(link);
  //     });
  // }
  
    return (
        <div>
      <button onClick={loadData}>Load Data</button>
      <button onClick={downloadPDF}>Download PDF</button>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.name} ({item.location}): {item.email}
          </li>
        ))}
      </ul>
    </div>
    );
};

export default Test2;



// exports.getBrandService = async () => {
//   const data = await Brand.find({});
//   // const data = await Product.find({});

//   const doc = new PDFDocument();
//   doc.pipe(fs.createWriteStream('data.pdf'));
//   doc.fontSize(16).text('Data:');
//   data?.forEach((item) => {
//       // doc.fontSize(12).text(`${item.name} (${item.email}): ${item.location} ${item.description}`);
//       doc.fontSize(12).text(`${item.name} ${item.brand} (${item.category}): ${item.unit} ${item.description} ${item.imageURLs}`);
//   });
//   doc.end();

//   // Generate Excel file
//   // const csv = json2csv(data);
//   // fs.writeFileSync('data.csv', csv);

//   // const fields = ['name', 'email', 'location'];
//   // const opts = { fields };
//   // const parser = new Parser(opts);
//   // const csv = parser.parse(data);
//   // fs.writeFileSync('data.csv', csv);

//   const fields = ['name', 'email', 'age'];
//   const opts = { fields, delimiter: ';' };
//   const parser = new Parser(opts);
//   const csv = parser.parse(data);
//   fs.writeFileSync('data.csv', csv);

//   return data;
// }