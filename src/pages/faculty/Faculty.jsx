import React, { useState } from "react";
import { FacultyContainer } from "./Faculty.styles";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setFaculty } from "../../redux/features/facultySlice";

function FacultyPage() {
  const dispatch = useDispatch();
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const facultyData = useSelector((state) => state.faculty);
  const [facultyMock, setFacultyMock] = useState(facultyData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const shortname = e.target.shortname.value;
    const year = e.target.year.value;
    const decan = e.target.decan.value;
    const secretar = e.target.secretar.value;
    dispatch(setFaculty({ fullname, shortname, year, decan, secretar }));
    setIsInputDisabled(true);
  };

  return (
    <>
      <Navbar />
      <FacultyContainer>
        <form onSubmit={handleSubmit}>
          <label for="fullname">Nume complet:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            value={facultyMock.fullname}
            onChange={(e) =>
              setFacultyMock({ ...facultyMock, fullname: e.target.value })
            }
            disabled={isInputDisabled}
          />
          <label for="shortname">Nume scurt:</label>
          <input
            type="text"
            id="shortname"
            name="shortname"
            required
            value={facultyMock.shortname}
            onChange={(e) =>
              setFacultyMock({ ...facultyMock, shortname: e.target.value })
            }
            disabled={isInputDisabled}
          />
          <label for="year">An universitar:</label>
          <input
            type="number"
            id="year"
            name="year"
            required
            value={facultyMock.year}
            onChange={(e) =>
              setFacultyMock({ ...facultyMock, year: e.target.value })
            }
            disabled={isInputDisabled}
          />
          <label for="decan">Nume decan:</label>
          <input
            type="text"
            id="decan"
            name="decan"
            required
            value={facultyMock.decan}
            onChange={(e) =>
              setFacultyMock({ ...facultyMock, decan: e.target.value })
            }
            disabled={isInputDisabled}
          />
          <label for="secretar">Nume secretar:</label>
          <input
            type="text"
            id="secretar"
            name="secretar"
            required
            value={facultyMock.secretar}
            onChange={(e) =>
              setFacultyMock({ ...facultyMock, secretar: e.target.value })
            }
            disabled={isInputDisabled}
          />
          {isInputDisabled ? (
            <button type="button" onClick={() => setIsInputDisabled(false)}>
              Editează
            </button>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <button type="submit">Salvează</button>
              <button
                type="button"
                onClick={() => {
                  setFacultyMock(facultyData);
                  setIsInputDisabled(true);
                }}
              >
                Anulează
              </button>
            </div>
          )}
        </form>
      </FacultyContainer>
    </>
  );
}

export default FacultyPage;
