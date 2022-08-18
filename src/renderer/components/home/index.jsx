import Icono from '../../assets/Icono/Excel.png';
import Zaragoza from '../../assets/Icono/zaragoza.png';
import './index.scss';
import Menu from './menu/menu';

function Nav() {
  return (
    <div className="nav">
      <div className="app-name">
        <img src={Icono} alt="" />
        <h1>Excel Join</h1>
      </div>
      <div className="zone-logo">
        <img src={Zaragoza} alt="" />
        <h1>Alcaldia de Zaragoza</h1>
      </div>
    </div>
  );
}

function Viewer() {
  return (
    <div className="view">
      <p>Hi</p>
    </div>
  );
}
export default function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="home-content">
        <Menu />
        <Viewer />
      </div>
    </div>
  );
}
