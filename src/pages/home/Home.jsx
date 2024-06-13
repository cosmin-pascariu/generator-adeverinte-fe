import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { HomeContainer } from "./Home.styles";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Papa from "papaparse";
import { useNavigate, useNavigation } from "react-router-dom";
// import XLSX from "xlsx";

const items = [
  {
    id: 1,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 2,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 3,
    student: "Georgescu Andrei",
    year: 3,
    program: "Master: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 4,
    student: "Popa Elena",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 5,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 6,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 7,
    student: "Georgescu Andrei",
    year: 3,
    program: "Master: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 8,
    student: "Popa Elena",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 9,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 10,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 11,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 12,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 13,
    student: "Georgescu Andrei",
    year: 3,
    program: "Master: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 14,
    student: "Popa Elena",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 15,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 16,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 17,
    student: "Georgescu Andrei",
    year: 3,
    program: "Master: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 18,
    student: "Popa Elena",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 19,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 20,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 21,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 22,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 23,
    student: "Georgescu Andrei",
    year: 3,
    program: "Master: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 24,
    student: "Popa Elena",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 25,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 26,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 27,
    student: "Georgescu Andrei",
    year: 3,
    program: "Master: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 28,
    student: "Popa Elena",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 29,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 30,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 31,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 32,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 33,
    student: "Georgescu Andrei",
    year: 3,
    program: "Master: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 34,
    student: "Popa Elena",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 35,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 36,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 37,
    student: "Georgescu Andrei",
    year: 3,
    program: "Master: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 38,
    student: "Popa Elena",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
  {
    id: 39,
    student: "Popescu Ion",
    year: 1,
    program: "Licenta: Calculatoare",
    tuition: "Buget",
    usage: "Studii",
  },
  {
    id: 40,
    student: "Ionescu Maria",
    year: 2,
    program: "Master: Calculatoare",
    tuition: "Taxa",
    usage: "Studii",
  },
];

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.student}</td>
            <td>{item.year}</td>
            <td>{item.program}</td>
            <td>{item.tuition}</td>
            <td>{item.usage}</td>
            <td>
              <button onClick={() => toast.success("Cererea a fost aprobata!")}>
                Accepta
              </button>
              <button onClick={() => toast.error("Cererea a fost respinsa!")}>
                Respinge
              </button>
            </td>
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

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
          <h1>Cereri aprobate: {items.length}</h1>
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
