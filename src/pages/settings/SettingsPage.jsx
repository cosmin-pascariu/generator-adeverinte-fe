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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text('UNIVERSITATEA "STEFAN CEL MARE" DIN SUCEAVA', 20, 20);
    doc.text(
      "FACULTATEA DE INGINERIE ELECTRICA SI STIINTA CALCULATOARELOR",
      20,
      30
    );
    doc.text("ADEVERINTA", 90, 40);

    doc.setFontSize(10);
    doc.text(
      `Studentul(a) ${formData.studentName} este inscris(a) in anul universitar ${formData.year}, in anul I de studii, program de studii: ${formData.program} / domeniul de studii: ${formData.domain}, forma de invatamant: ${formData.studyForm}, regim: ${formData.feeStatus}.`,
      20,
      60
    );
    doc.text(
      `Adeverinta se elibereaza pentru a-i servi la ${formData.purpose}.`,
      20,
      70
    );

    doc.text("DECAN", 20, 90);
    doc.text("SECRETAR SEF", 80, 90);
    doc.text("SECRETARIAT", 140, 90);

    // doc.save("adeverinta.pdf"); //TODO: doc.save descarca pdf-ul
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
          <button type="button" onClick={generatePdf}>
            Generate PDF
          </button>
        </form>
      </HomeContainer>
    </>
  );
}

export default SettingsPage;
