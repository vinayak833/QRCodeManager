import { useState } from "react";

function QRForm({ addQRCode }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    addQRCode(text);
    setText("");
  };

  return (
    <div className="card">
      <h2>Generate QR Code</h2>

      <input
        type="text"
        placeholder="Enter URL or Text"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button onClick={handleSubmit}>
        Generate QR
      </button>
    </div>
  );
}

export default QRForm;
