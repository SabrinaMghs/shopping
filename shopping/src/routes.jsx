import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Lojas from "./pages/Lojas";
import Novidades from "./pages/Novidades";
import Contato from "./pages/Contato";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
