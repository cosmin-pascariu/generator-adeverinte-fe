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

const PaginatedItems = ({ itemsPerPage }) => {
  const { students } = useSelector((state) => state.students);
  const [pageNumber, setPageNumber] = React.useState(0);
  const pagesVisited = pageNumber * itemsPerPage;
  const currentItems = students.slice(
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
  const { students } = useSelector((state) => state.students);

  useEffect(() => {
    console.log(students);
  }, [students]);

  return (
    <>
      <Navbar />
      <StudentsContainer>
        {students && students.length > 0 ? (
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
