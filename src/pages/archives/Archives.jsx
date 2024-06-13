import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { HomeContainer } from "./Archives.styles";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

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

function Archives() {
  const [formResponses, setFormResponses] = useState([]);
  const { requests } = useSelector((state) => state.requests);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbw7pEkepK5Z3DW8o_SkQqpRPH9tZgHIu21SS8uRDoBY5Iuj_m1pzjUypnZRPq0GN6gw/exec"
    )
      .then((response) => response.json())
      .then((data) => setFormResponses(data))
      .catch((error) => console.error("Error fetching data:", error));
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
            <PaginatedItems itemsPerPage={10} items={requests} />
          </tbody>
        </table>

        <ToastContainer />
      </HomeContainer>
    </>
  );
}

export default Archives;
