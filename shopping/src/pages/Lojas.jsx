export default function Lojas() {
  const lojas = ["Cinema", "Academia", "Restaurantes", "Moda", "Serviços"];

  return (
    <section className="container">
      <h2>Nossas Lojas</h2>
      <div className="grid">
        {lojas.map(loja => (
          <div className="card" key={loja}>{loja}</div>
        ))}
      </div>
    </section>
  );
}
