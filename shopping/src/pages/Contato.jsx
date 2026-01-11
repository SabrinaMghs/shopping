export default function Contato() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Mensagem enviada!");
  }

  return (
    <section className="container">
      <h2>Contato</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" required />
        <button>Enviar</button>
      </form>
    </section>
  );
}
