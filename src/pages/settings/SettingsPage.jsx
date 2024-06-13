import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { HomeContainer } from "../home/Home.styles";
import jsPDF from "jspdf";

function SettingsPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    year: "",
    program: "",
    domain: "",
    studyForm: "",
    feeStatus: "",
    purpose: "",
    decan: "",
    secretar_sef: "",
    secretariat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const generatePdf = () => {
  //   const doc = new jsPDF("landscape");

  //   doc.setFontSize(8);
  //   doc.text('UNIVERSITATEA "STEFAN CEL MARE" DIN SUCEAVA', 10, 10);
  //   doc.text(
  //     "FACULTATEA DE INGINERIE ELECTRICA SI STIINTA CALCULATOARELOR",
  //     10,
  //     14
  //   );
  //   doc.text("Nr ................./FIESC/................", 160, 18);
  //   doc.setFontSize(10);
  //   doc.setFont("helvetica", "bold"); // Set font to bold
  //   doc.text("ADEVERINTA", 95, 35);
  //   doc.setFont("helvetica", "normal"); // Reset font to normal

  //   doc.setFontSize(10);
  //   doc.text(
  //     `\tStudentul(a) ${formData.studentName} este inscris(a) in anul universitar ${formData.year}, in anul I de studii, program de studii:\n ${formData.program} / domeniul de studii: ${formData.domain}, forma de invatamant: ${formData.studyForm}, regim: ${formData.feeStatus}.`,
  //     20,
  //     45
  //   );
  //   doc.text(
  //     `\tAdeverinta se elibereaza pentru a-i servi la ${formData.purpose}.`,
  //     20,
  //     53
  //   );
  //   doc.setFont("helvetica", "bold"); // Set font to bold
  //   doc.text("DECAN,", 20, 65);
  //   doc.text("SECRETAR SEF,", 90, 65);
  //   doc.text("SECRETARIAT,", 160, 65);
  //   doc.setFont("helvetica", "normal"); // Reset font to normal

  //   doc.text(`${formData.decan}`, 20, 70);
  //   doc.text(`${formData.secretar_sef}`, 90, 70);
  //   doc.text(`${formData.secretariat}`, 160, 70);

  //   // doc.save("adeverinta.pdf"); //TODO: doc.save descarca pdf-ul
  //   // Create a Blob from the PDF and open it in a new window
  //   const pdfBlob = doc.output("blob");
  //   const url = URL.createObjectURL(pdfBlob);
  //   window.open(url, "_blank");
  // };

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
    });

    // Create a Blob from the PDF and open it in a new window
    const pdfBlob = doc.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <HomeContainer>
        <h1>Generate PDF Form</h1>
        <form>
          <div>
            <label>Student Name: </label>
            <input type="text" name="studentName" onChange={handleChange} />
          </div>
          <div>
            <label>Year: </label>
            <input type="text" name="year" onChange={handleChange} />
          </div>
          <div>
            <label>Program: </label>
            <input type="text" name="program" onChange={handleChange} />
          </div>
          <div>
            <label>Domain: </label>
            <input type="text" name="domain" onChange={handleChange} />
          </div>
          <div>
            <label>Study Form: </label>
            <input type="text" name="studyForm" onChange={handleChange} />
          </div>
          <div>
            <label>Fee Status: </label>
            <input type="text" name="feeStatus" onChange={handleChange} />
          </div>
          <div>
            <label>Purpose: </label>
            <input type="text" name="purpose" onChange={handleChange} />
          </div>
          <div>
            <label>Decan: </label>
            <input type="text" name="decan" onChange={handleChange} />
          </div>
          <div>
            <label>Secretar sef: </label>
            <input type="text" name="secretar_sef" onChange={handleChange} />
          </div>
          <div>
            <label>Secretariat: </label>
            <input type="text" name="secretariat" onChange={handleChange} />
          </div>
          <button type="button" onClick={generatePdf}>
            Generate PDF
          </button>
        </form>
      </HomeContainer>
    </>
  );
}

export default SettingsPage;
