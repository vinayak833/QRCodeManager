import { useState, useEffect } from "react";
import "./App.css";

import QRForm from "./components/QRForm";
import QRList from "./components/QRList";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard";

function App() {
  const [qrs, setQrs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedQrs =
      JSON.parse(
        localStorage.getItem("qrs")
      ) || [];

    setQrs(savedQrs);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "qrs",
      JSON.stringify(qrs)
    );
  }, [qrs]);

  const addQRCode = (text) => {
    const newQR = {
      id: Date.now(),
      text,
      favorite: false,
    };

    setQrs([...qrs, newQR]);
  };

  const toggleFavorite = (id) => {
    setQrs(
      qrs.map((qr) =>
        qr.id === id
          ? {
              ...qr,
              favorite: !qr.favorite,
            }
          : qr
      )
    );
  };

  const deleteQR = (id) => {
    setQrs(
      qrs.filter(
        (qr) => qr.id !== id
      )
    );
  };

  const filteredQrs = qrs.filter(
    (qr) =>
      qr.text
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  return (
    <div className="container">
      <h1>
        QR Code Generator &
        Manager
      </h1>

      <Dashboard qrs={qrs} />

      <QRForm
        addQRCode={addQRCode}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <QRList
        qrs={filteredQrs}
        toggleFavorite={
          toggleFavorite
        }
        deleteQR={deleteQR}
      />
    </div>
  );
}

export default App;
