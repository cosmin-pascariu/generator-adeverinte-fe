import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import * as XLSX from "xlsx";
import validator from "validator";
import Modal from "react-modal";
import {
  setStudents,
  setStudentsAction,
} from "../../redux/actions/studentsActions";

const fileTypes = ["XLSX"];

// Modal.setAppElement("#data");

function XLSXUploader() {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errors, setErrors] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const validateData = (data) => {
    const errors = [];

    data.forEach((entry, index) => {
      const nume = entry["Nume"];
      const prenume = entry["Prenume"];
      const email = entry["Email student"];
      const statutFinanciar = entry["Finanțare"];

      // // Validarea diacriticelor
      // const hasDiacritics =
      //   /[\u0103\u0119\u021B\u0219]/.test(nume) ||
      //   /[\u0103\u0119\u021B\u0219]/.test(prenume);
      // if (!hasDiacritics) {
      //   errors.push({
      //     index,
      //     error: "Numele sau prenumele trebuie să conțină diacritice.",
      //   });
      // }

      // Sanitizarea spațiilor albe
      const sanitizedNume = nume.trim();
      const sanitizedPrenume = prenume.trim();

      // Validare după lungime nume/prenume
      if (sanitizedNume.length < 2 || sanitizedNume.length > 50) {
        errors.push({
          index,
          error: "Numele trebuie să aibă între 2 și 50 de caractere.",
        });
      }
      if (sanitizedPrenume.length < 2 || sanitizedPrenume.length > 50) {
        errors.push({
          index,
          error: "Prenumele trebuie să aibă între 2 și 50 de caractere.",
        });
      }

      // Validare adresă de email
      if (!validator.isEmail(email)) {
        errors.push({
          index,
          error: "Formatul adresei de email nu este corespunzător.",
        });
      } else {
        const [localPart, domain] = email.split("@");
        if (domain !== "student.usv.ro") {
          errors.push({
            index,
            error: "Domeniul adresei de email trebuie să fie @student.usv.ro.",
          });
        } else {
          const [emailNume, emailPrenume] = localPart.split(".");
          if (
            !emailNume ||
            !emailPrenume ||
            !sanitizedPrenume
              .replace(/[\u0103\u0119\u021B\u0219]/g, "")
              .toLowerCase()
              .includes(
                emailNume
                  .replace(/[\u0103\u0119\u021B\u0219]/g, "")
                  .toLowerCase()
              ) ||
            emailPrenume
              .replace(/[\u0103\u0119\u021B\u02190-9]/g, "")
              .toLowerCase() !==
              sanitizedNume
                .replace(/[\u0103\u0119\u021B\u02190-9]/g, "")
                .toLowerCase()
          ) {
            errors.push({
              index,
              error:
                "Numele și prenumele din adresa de email nu se regăsesc în câmpurile nume/prenume.",
            });
          }
        }
      }

      // Validarea statutului financiar
      const validStatutFinanciar = ["Buget", "Taxă"]; // exemple de statuturi financiare
      if (!validStatutFinanciar.includes(statutFinanciar)) {
        errors.push({ index, error: "Statutul financiar nu este valid." });
      }
    });

    if (errors.length > 0) {
      setErrors(errors);
      openModal();
    }
    return errors;
  };

  const handleChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      workbook.SheetNames.forEach((sheetName) => {
        const XL_row_object = XLSX.utils.sheet_to_json(
          workbook.Sheets[sheetName]
        );

        const errors = validateData(XL_row_object);
        if (errors.length > 0) {
          console.log("Erori de validare:", errors);
        } else {
          dispatch(setStudents(XL_row_object));
          const payload = XL_row_object.map((item) => ({
            id: item.id,
            initiala_tata: item["Inițială Tată"],
            email: item["Email student"],
            denumire_program_studii: item["Denumire program de studii"],
            ciclu_studii: item["Ciclu de studii"],
            an_studiu: item["An studiu"],
            domeniu_studii: null,
            forma_invatamant: item["Forma învățământ"],
            finantare: item["Finanțare"],
            nume: item["Nume"],
            prenume: item["Prenume"],
            sex: item["Sex"],
          }));
          setStudentsAction(payload);
        }
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
      <Modal isOpen={modalIsOpen}>
        <h2>Erori asupra fisierului XLSX:</h2>
        {errors.map((error, index) => {
          return (
            <div>
              <span>{index + 1}. </span>
              <span>{error.error}</span>{" "}
            </div>
          );
        })}
        <button onClick={closeModal}>Inchide</button>
      </Modal>
    </div>
  );
}

export default XLSXUploader;
