import React, { useEffect, useState } from "react";
import { FacultyContainer } from "./Faculty.styles";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setFaculties } from "../../redux/actions/facultiesActions";
import updateFaculties from "../../services/updateFaculties";
import getFaculties from "../../services/getFaculties";

function FacultyPage() {
  const dispatch = useDispatch();
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const { faculties } = useSelector((state) => state.faculty);
  const facultate = faculties[0];
  const [facultyMock, setFacultyMock] = useState(facultate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullname = e.target?.fullname.value;
    const shortname = e.target.shortname.value;
    const year = e.target.year.value;
    const decan = e.target.decan.value;
    const secretar = e.target.secretar.value;
    const payload = {
      nume_complet: fullname,
      nume_scurt: shortname,
      an_universitar: year,
      nume_decan: decan,
      nume_secretar: secretar,
    };
    dispatch(setFaculties(payload));
    updateFaculties(payload);
    setIsInputDisabled(true);
  };

  useEffect(() => {
    if (faculties && faculties[0]) {
      setFacultyMock(faculties[0]);
    }
  }, [faculties]);

  const setFacultyData = async () => {
    const facultate = await getFaculties();
    dispatch(
      setFaculties([
        {
          fullname: facultate?.nume_complet,
          shortname: facultate?.nume_scurt,
          year: facultate?.an_universitar,
          decan: facultate?.nume_decan,
          secretar: facultate?.nume_secretar,
        },
      ])
    );
  };

  useEffect(() => {
    setFacultyData();
  }, []);

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
            value={facultyMock?.fullname || ""}
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
            value={facultyMock?.shortname || ""}
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
            value={facultyMock?.year || ""}
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
            value={facultyMock?.decan || ""}
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
            value={facultyMock?.secretar || ""}
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
                  setFacultyMock(facultate);
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
