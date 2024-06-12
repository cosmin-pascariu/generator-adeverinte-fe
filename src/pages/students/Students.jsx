import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { StudentsContainer } from "./Students.styles";
import XLSXUploader from "../../components/xlsx-uploader/XlsxUploader";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item["Email student"]}</td>
            <td>{item["Denumire program de studii"]}</td>
            <td>{item["Ciclu de studii"]}</td>
            <td>{item["An studiu"]}</td>
            <td>{item["Forma învățământ"]}</td>
            <td>{item["Finanțare"]}</td>
            <td>
              {item["Nume"] +
                " " +
                item["Inițială Tată"] +
                " " +
                item["Prenume"]}
            </td>
            <td>{item["Sex"]}</td>
          </tr>
        ))}
    </>
  );
};

const PaginatedItems = ({ itemsPerPage }) => {
  const { students } = useSelector((state) => state.student);
  const [pageNumber, setPageNumber] = React.useState(0);
  const pagesVisited = pageNumber * itemsPerPage;
  const currentItems = students?.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        pageCount={Math.ceil(students.length / itemsPerPage)}
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

function StudentsPage() {
  const { students } = useSelector((state) => state.student);

  return (
    <>
      <Navbar />
      <StudentsContainer>
        {students && students.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Nr.</th>
                <th>Email student</th>
                <th>Program de studii</th>
                <th>Ciclul de studii</th>
                <th>An studiu</th>
                <th>Forma învățământ</th>
                <th>Finanțare</th>
                <th>Nume complet</th>
                <th>Sex</th>
              </tr>
            </thead>
            <tbody>
              <PaginatedItems itemsPerPage={10} />
            </tbody>
          </table>
        ) : (
          <XLSXUploader />
        )}
        <ToastContainer />
      </StudentsContainer>
    </>
  );
}

export default StudentsPage;
