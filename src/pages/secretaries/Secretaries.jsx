import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { SecretariesContainer } from "./Secretaries.styles";

function SecretariesPage() {
  const initialSecretaries = [
    { id: 1, name: "Secretary 1", email: "sec1@example.com" },
    { id: 2, name: "Secretary 2", email: "sec2@example.com" },
    { id: 3, name: "Secretary 3", email: "sec3@example.com" },
    { id: 4, name: "Secretary 4", email: "sec4@example.com" },
    { id: 5, name: "Secretary 5", email: "sec5@example.com" },
  ];

  const [secretaries, setSecretaries] = useState(initialSecretaries);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleEdit = (secretary) => {
    setEditId(secretary.id);
    setForm({ name: secretary.name, email: secretary.email });
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleSave = (id) => {
    setSecretaries(
      secretaries.map((sec) =>
        sec.id === id ? { ...sec, name: form.name, email: form.email } : sec
      )
    );
    setEditId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

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
              setSecretaries([
                ...secretaries,
                {
                  id: secretaries.length + 1,
                  name: "New Secretary",
                  email: "Secretary email",
                },
              ]);
              handleEdit({
                id: secretaries.length + 1,
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
            {secretaries.map((sec) => (
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
                <td>ing</td>
                <td>
                  {editId === sec.id ? (
                    <>
                      <button onClick={() => handleSave(sec.id)}>
                        Salvează
                      </button>
                      <button onClick={handleCancel}>Anulează</button>
                      <button
                        onClick={() =>
                          setSecretaries(
                            secretaries.filter((s) => s.id !== sec.id)
                          )
                        }
                        className="absolute"
                      >
                        Șterge
                      </button>
                    </>
                  ) : (
                    <button onClick={() => handleEdit(sec)}>Editează</button>
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
