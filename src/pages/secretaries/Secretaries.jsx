import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { SecretariesContainer } from "./Secretaries.styles";
import { useSelector } from "react-redux";
import {
  addSecretaryAction,
  deleteSecretaryAction,
  editSecretaryAction,
  getSecretariesAction,
} from "../../redux/actions/secretariesActions";

function SecretariesPage() {
  const [secretariesData, setSecretariesData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", title: "", id: "" });

  const handleEdit = (secretary) => {
    setEditId(secretary.id);
    setForm({
      name: secretary.name,
      email: secretary.email,
      title: secretary.title,
    });
  };

  const handleCancel = (index) => {
    setForm({});
    if (index + 1 === secretariesData.length && !isEditMode)
      setSecretariesData((prevData) => prevData.filter((s) => s.id !== editId));
    setEditId(null);
    setIsEditMode(false);
  };

  const handleSave = async () => {
    if (isEditMode) {
      await editSecretaryAction(
        {
          nume_complet: form.name,
          email: form.email,
          titlu_secretar: form.title,
        },
        editId
      );
      setIsEditMode(false);
    } else {
      await addSecretaryAction({
        nume_complet: form.name,
        email: form.email,
        titlu_secretar: form.title,
      });
    }
    setSecretariesData(
      secretariesData.map((sec) =>
        sec.id === editId
          ? { ...sec, name: form.name, email: form.email, title: form.title }
          : sec
      )
    );
    setEditId(null);
  };

  const handleDelete = async () => {
    try {
      const resp = await deleteSecretaryAction(editId);
    } catch (e) {
      console.log("delete secretary", e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getData = async () => {
    try {
      const secrt = await getSecretariesAction();
      setSecretariesData(
        secrt.map((s) => ({
          id: s.id,
          name: s.nume_complet,
          email: s.email,
          title: s.titlu_secretar,
        }))
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <SecretariesContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h1>Lista secretari</h1>
          <button
            onClick={() => {
              setSecretariesData([
                ...secretariesData,
                {
                  id: secretariesData.length + 1,
                  name: "",
                  email: "",
                },
              ]);
              handleEdit({
                id: secretariesData.length + 1,
                name: "New Secretary",
                email: "Secretary email",
              });
            }}
          >
            Adaugă secretar
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nume complet</th>
              <th>Email</th>
              <th>Titlu</th>
              <th>Opțiuni</th>
            </tr>
          </thead>
          <tbody>
            {secretariesData &&
              secretariesData?.map((sec, index) => (
                <tr key={sec.id}>
                  <td>
                    {editId === sec.id ? (
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    ) : (
                      sec.name
                    )}
                  </td>
                  <td>
                    {editId === sec.id ? (
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    ) : (
                      sec.email
                    )}
                  </td>
                  <td>
                    {editId === sec.id ? (
                      <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                      />
                    ) : (
                      sec.title
                    )}
                  </td>
                  <td>
                    {editId === sec.id ? (
                      <>
                        <button onClick={() => handleSave()}>Salvează</button>
                        <button onClick={() => handleCancel(index)}>
                          Anulează
                        </button>
                        <button
                          onClick={() => {
                            handleDelete();
                            setSecretariesData(
                              secretariesData.filter((s) => s.id !== sec.id)
                            );
                          }}
                          className="absolute"
                        >
                          Șterge
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setIsEditMode(true);
                          handleEdit(sec);
                        }}
                      >
                        Editează
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </SecretariesContainer>
    </>
  );
}

export default SecretariesPage;
