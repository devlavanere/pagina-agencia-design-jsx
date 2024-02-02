import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Rodape from './componentes/Rodape';
import './App.css';

export default function App() {
  return (
    <main>
      <Topo />
      <SecaoBanner />
      <SecaoExperienciaTrabalho />
      <Rodape />
    </main>
  );
}

