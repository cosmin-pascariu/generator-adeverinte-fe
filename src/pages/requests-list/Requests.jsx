import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { HomeContainer } from "./Requests.styles";
import ReactPaginate from "react-paginate";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Papa from "papaparse";
import jsPDF from "jspdf";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item["Nume complet"]}</td>
            <td>{item["An studiu"]}</td>
            <td>{item["Program studii"]}</td>
            <td>{item["Finanțare"]}</td>
            <td>{item["Motiv cerere"]}</td>
            <td>{item.status}</td>
          </tr>
        ))}
    </>
  );
};

const PaginatedItems = ({ items, itemsPerPage }) => {
  const [pageNumber, setPageNumber] = React.useState(0);
  const pagesVisited = pageNumber * itemsPerPage;
  const currentItems = items.slice(pagesVisited, pagesVisited + itemsPerPage);

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        pageCount={Math.ceil(items.length / itemsPerPage)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        containerClassName={"pagination"}
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        nextClassName="page-item-white"
        previousClassName="page-item-white"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName={"active"}
        disabledClassName="page-item"
        onPageChange={({ selected }) => {
          setPageNumber(selected);
        }}
      />
    </>
  );
};

function Requests() {
  const [data, setData] = useState([]);

  const generatePdf = () => {
    const doc = new jsPDF("landscape");

    const forms = [
      {
        x: 10,
        y: 10,
        studentName: "Student Name 1",
        year: "2023-2024",
        program: "Program 1",
        domain: "Domain 1",
        studyForm: "Form 1",
        feeStatus: "Fee 1",
        purpose: "Purpose 1",
      },
      {
        x: 150,
        y: 10,
        studentName: "Student Name 2",
        year: "2023-2024",
        program: "Program 2",
        domain: "Domain 2",
        studyForm: "Form 2",
        feeStatus: "Fee 2",
        purpose: "Purpose 2",
      },
      {
        x: 10,
        y: 110,
        studentName: "Student Name 3",
        year: "2023-2024",
        program: "Program 3",
        domain: "Domain 3",
        studyForm: "Form 3",
        feeStatus: "Fee 3",
        purpose: "Purpose 3",
      },
      {
        x: 150,
        y: 110,
        studentName: "Student Name 4",
        year: "2023-2024",
        program: "Program 4",
        domain: "Domain 4",
        studyForm: "Form 4",
        feeStatus: "Fee 4",
        purpose: "Purpose 4",
      },
    ];

    forms.forEach((formData) => {
      const {
        x,
        y,
        studentName,
        year,
        program,
        domain,
        studyForm,
        feeStatus,
        purpose,
      } = formData;

      doc.setFontSize(8);
      doc.text('UNIVERSITATEA "STEFAN CEL MARE" DIN SUCEAVA', x, y);
      doc.text(
        "FACULTATEA DE INGINERIE ELECTRICA SI STIINTA CALCULATOARELOR",
        x,
        y + 4
      );
      doc.text("Nr ............/FIESC/...........", x + 100, y + 8);

      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("ADEVERINTA", x + 50, y + 20);
      doc.setFont("helvetica", "normal");

      doc.setFontSize(10);
      doc.text(
        `\tStudentul(a) ${studentName} este inscris(a) in anul universitar ${year}, in anul\n I de studii, program de studii: ${program} / domeniul de studii: ${domain}, forma\n de invatamant: ${studyForm}, regim: ${feeStatus}.`,
        x,
        y + 30
      );
      doc.text(
        `\tAdeverinta se elibereaza pentru a-i servi la ${purpose}.`,
        x,
        y + 42
      );

      doc.text("DECAN", x, y + 50);
      doc.text("SECRETAR SEF,", x + 50, y + 50);
      doc.text("SECRETARIAT,", x + 100, y + 50);
      doc.setFontSize(8);
      //Laurenţiu-Dan MILICI
      doc.text(`Prof.univ.dr.ing. Laurentiu-Dan MILICI`, x, y + 55);
      doc.text(`Elena CURELARU`, x + 50, y + 55);
      doc.text(`Laura DOSPINESCU`, x + 100, y + 55);
    });

    // Create a Blob from the PDF and open it in a new window
    const pdfBlob = doc.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    window.open(url, "_blank");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1gFf44uRi3QNxo-O-iHl6A96qu6f64cSvyHd40VPcQPp47Nqs5WwybKzW7JD3WJc_Xot4slINnP9E/pub?output=csv"
        );
        const parsedData = Papa.parse(response.data, { header: true });
        const mappedData = parsedData.data.map((item, index) => ({
          id: index,
          "Nume complet": item["Nume complet"] || "",
          "An studiu": item["An"] || "",
          "Program studii": item["Program de studiu"] || "",
          Finanțare: item["Regim de studiu"] || "",
          "Motiv cerere": item["Motivul cererii"] || "",
          status: item["Status"],
        }));
        setData(mappedData);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <HomeContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h1>Lista cereri</h1>
          <button
            style={{
              flexWrap: "nowrap",
              width: 150,
            }}
            // save items data into XLSX file
            onClick={async () => {
              const XLSX = await import("xlsx");
              const ws = XLSX.utils.json_to_sheet(data);
              const wb = XLSX.utils.book_new();
              XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
              XLSX.writeFile(wb, "export.xlsx");
            }}
          >
            Listați adeverințele
          </button>
          <button onClick={() => generatePdf()}>Listare (cate 4)</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Student</th>
              <th>Anul de studiu</th>
              <th>Program de studiu</th>
              <th>Regim taxa</th>
              <th>Utilizare</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <PaginatedItems itemsPerPage={10} items={data} />
          </tbody>
        </table>

        <ToastContainer />
      </HomeContainer>
    </>
  );
}

export default Requests;
