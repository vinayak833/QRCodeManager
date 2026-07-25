import QRItem from "./QRItem";

function QRList({
  qrs,
  toggleFavorite,
  deleteQR,
}) {
  return (
    <div className="qr-grid">
      {qrs.map((qr) => (
        <QRItem
          key={qr.id}
          qr={qr}
          toggleFavorite={
            toggleFavorite
          }
          deleteQR={deleteQR}
        />
      ))}
    </div>
  );
}

export default QRList;
