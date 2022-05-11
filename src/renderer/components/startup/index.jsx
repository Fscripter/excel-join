import Icon from '../../assets/Icono/Excel.png';
import './index.scss';

function Autor() {
  return (
    <div id="Autor">
      <h2>
        Made by: <span>Fscripter and AndresM</span>
      </h2>
    </div>
  );
}
export default function Startup() {
  return (
    <div id="Startup">
      <div className="content">
        <img src={Icon} alt="" />
        <h1>Excel Join</h1>
      </div>
      <Autor />
    </div>
  );
}
