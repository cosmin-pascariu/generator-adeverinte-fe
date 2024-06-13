import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { HomeContainer } from "./Home.styles";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Papa from "papaparse";
import jsPDF from "jspdf";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  },
};

const Items = ({ currentItems }) => {
  const [isDeleteItemActive, setIsDeleteItemActive] = useState(false);
  const [rejectItem, setRejectItem] = useState({
    item: {},
    message: "",
  });

  function replaceDiacritics(text) {
    const diacriticsMap = {
      ă: "a",
      â: "a",
      î: "i",
      ș: "s",
      ț: "t",
      Ă: "A",
      Â: "A",
      Î: "I",
      Ș: "S",
      Ț: "T",
    };

    return text?.replace(/[ăâîșțĂÂÎȘȚ]/g, (match) => diacriticsMap[match]);
  }

  const generatePdf = (form) => {
    const formData = {
      student: replaceDiacritics(form.student),
      year: form.year, // Assuming year does not contain diacritics
      program: replaceDiacritics(form.program),
      domain: replaceDiacritics(form.domain),
      tuition: replaceDiacritics(form.tuition),
      usage: replaceDiacritics(form.usage),
    };

    const doc = new jsPDF();

    doc.setFontSize(8);
    doc.setFont("helvetica");
    doc.text('UNIVERSITATEA "STEFAN CEL MARE" DIN SUCEAVA', 10, 10);
    doc.text(
      "FACULTATEA DE INGINERIE ELECTRICA SI STIINTA CALCULATOARELOR",
      10,
      14
    );
    doc.text("Nr ................./FIESC/................", 160, 18);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold"); // Set font to bold
    doc.text("ADEVERINTA", 95, 35);
    doc.setFont("helvetica", "normal"); // Reset font to normal

    doc.setFontSize(10);
    doc.text(
      `\tStudentul(a) ${formData.student} este inscris(a) in anul universitar ${formData.year}, in anul I de studii, program de studii:\n ${formData.program} / domeniul de studii: ${formData.domain}, forma de invatamant: ZI, regim: ${formData.tuition}.`,
      20,
      45
    );
    doc.text(
      `\tAdeverinta se elibereaza pentru a-i servi la ${formData.usage}.`,
      20,
      53
    );
    doc.setFont("helvetica", "bold"); // Set font to bold
    doc.text("DECAN,", 20, 65);
    doc.text("SECRETAR SEF,", 90, 65);
    doc.text("SECRETARIAT,", 160, 65);
    doc.setFont("helvetica", "normal"); // Reset font to normal

    //Laurenţiu-Dan MILICI
    doc.text(`Prof.univ.dr.ing. Laurentiu-Dan MILICI`, 8, 70);
    doc.text(`Elena CURELARU`, 90, 70);
    doc.text(`Laura DOSPINESCU`, 160, 70);

    // doc.save("adeverinta.pdf"); //TODO: doc.save descarca pdf-ul
    // Create a Blob from the PDF and open it in a new window
    const pdfBlob = doc.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    window.open(url, "_blank");
  };

  useEffect(() => {
    console.log("mes", rejectItem.message);
    console.log("s", rejectItem.item);
  }, [rejectItem]);

  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <tr key={item.id} onClick={() => generatePdf(item)}>
            <td>{item.id}</td>
            <td>{item.student}</td>
            <td>{item.year}</td>
            <td>{item.program}</td>
            <td>{item.tuition}</td>
            <td>{item.usage}</td>
            <td>
              <button
                onClick={(e) => {
                  e.stopPropagation();

                  // Get today's date and add one day for tomorrow
                  const today = new Date();
                  const tomorrow = new Date(today);
                  tomorrow.setDate(tomorrow.getDate() + 1);

                  // Format the date as 'dd-mm-yyyy'
                  const formattedDate = `${tomorrow.getDate()}-${
                    tomorrow.getMonth() + 1
                  }-${tomorrow.getFullYear()}`;

                  window.location.href = `mailto:${item.email}?subject=Aprobare cerere secretariat USV&body=Bună ziua ${item.student},\n\n Puteți ridica adeverința de la secretariat începând cu data de ${formattedDate}, în perioada programului de lucru al secretariatului.`;
                  toast.success("Cererea a fost aprobată!");
                }}
              >
                Accepta
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDeleteItemActive(true);
                  setRejectItem({ ...rejectItem, item: item });
                }}
              >
                Respinge
              </button>
            </td>
          </tr>
        ))}
      <Modal isOpen={isDeleteItemActive} style={customStyles}>
        <h1>Motivul refuzului</h1>
        <textarea
          onChange={(e) =>
            setRejectItem({ ...rejectItem, message: e.target.value })
          }
          placeholder="Introdu motivul refuzului cererii..."
          style={{
            minWidth: 400,
            minHeight: 100,
            borderRadius: 8,
            border: "1px solid #bbbbbb",
            marginBottom: 20,
            padding: 10,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => {
              if (rejectItem.message.length === 0) {
                toast.error("Trebuie să introduci motivul refuzului!");
                return;
              }
              console.log("rehct", rejectItem.item);
              window.location.href = `mailto:${rejectItem.item.email}?subject=Refuzare cerere secretariat USV&body=Bună ziua ${rejectItem.item.student},\n\n Cererea dumneavoastră a fost refuzată pe baza următorului motiv: ${rejectItem.message}`;
              toast.success("Cererea a fost respinsă!");
              setRejectItem({});
              setIsDeleteItemActive(false);
            }}
            style={{ padding: "4px 6px", cursor: "pointer" }}
          >
            Trimite
          </button>
          <button
            onClick={() => {
              setIsDeleteItemActive(false);
              setRejectItem({});
            }}
            style={{ padding: "4px 6px", cursor: "pointer" }}
          >
            Anulează
          </button>
        </div>
      </Modal>
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

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1gFf44uRi3QNxo-O-iHl6A96qu6f64cSvyHd40VPcQPp47Nqs5WwybKzW7JD3WJc_Xot4slINnP9E/pub?output=csv"
        );
        const parsedData = Papa.parse(response.data, { header: true });
        const mappedData = parsedData.data.map((item, index) => ({
          id: index,
          student: item["Nume complet"] || "", // Fallback to empty string if field is missing
          year: item["An"] || "", // Fallback to empty string if field is missing
          program: item["Program de studiu"] || "", // Fallback to empty string if field is missing
          tuition: item["Regim de studiu"] || "", // Fallback to empty string if field is missing
          usage: item["Motivul cererii"] || "", // Fallback to empty string if field is missing
          email: item["Adresă de e-mail"],
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
          <h1>Cereri în așteptare: {data.length}</h1>
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
              <th>Optiuni</th>
            </tr>
          </thead>
          <tbody>
            <PaginatedItems items={data} itemsPerPage={10} />
          </tbody>
        </table>
        <ToastContainer />
      </HomeContainer>
    </>
  );
}

export default Home;
