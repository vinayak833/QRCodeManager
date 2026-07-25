function Dashboard({ qrs }) {
  const favorites =
    qrs.filter(
      (qr) => qr.favorite
    ).length;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <p>
        Total QR Codes: {qrs.length}
      </p>

      <p>
        Favorite QR Codes:
        {favorites}
      </p>
    </div>
  );
}

export default Dashboard;
