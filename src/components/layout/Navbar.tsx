import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="d-flex flex-nowrap justify-content-end">
      <Link to="/linhas-producao" className="nav-link mx-2">Linhas de Produção</Link>
      <Link to="/maquina" className="nav-link mx-2">Máquinas</Link>
      <Link to="/sensor" className="nav-link mx-2">Sensores</Link>
      <Link to="/atualizar-sensores" className="nav-link mx-2">Atualizar Sensores</Link>
    </div>
  );
}

export default NavBar;
