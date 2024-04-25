import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import * as XLSX from "xlsx";
import { setStudents } from "../../redux/features/studentsSlice";

const fileTypes = ["XLSX"];

function XLSXUploader() {
  const dispatch = useDispatch();

  const handleChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      workbook.SheetNames.forEach((sheetName) => {
        const XL_row_object = XLSX.utils.sheet_to_json(
          workbook.Sheets[sheetName]
        );
        dispatch(setStudents(XL_row_object));
      });
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  );
}

export default XLSXUploader;

// TODO: Make the button work for both XLSX and CSV files
// import React, { useState } from 'react';
// import { FileUploader } from 'react-drag-drop-files';
// import * as XLSX from 'xlsx';

// const fileTypes = ["XLSX", "CSV"];

// function FileUploaderComponent() {
//   const [jsonData, setJsonData] = useState([]);

//   const handleChange = (file) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const data = e.target.result;
//       let parsedData;

//       if (file.type === "text/csv") {
//         // For CSV file
//         parsedData = XLSX.read(data, { type: 'binary', sheetRows: 10 });
//         setJsonData(XLSX.utils.sheet_to_json(parsedData.Sheets[parsedData.SheetNames[0]]));
//       } else {
//         // For XLSX file
//         const workbook = XLSX.read(data, { type: 'binary' });
//         workbook.SheetNames.forEach((sheetName) => {
//           const XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//           setJsonData(prevData => [...prevData, ...XL_row_object]);
//         });
//       }
//     };
//     reader.onerror = (error) => {
//       console.error('Error: ', error);
//     };
//     reader.readAsBinaryString(file);
//   };

//   return (
//     <div>
//       <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
//       <button onClick={() => console.log(jsonData)}>Log JSON Data</button>
//     </div>
//   );
// }

// export default FileUploaderComponent;
