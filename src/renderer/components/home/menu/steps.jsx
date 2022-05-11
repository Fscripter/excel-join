import * as png from '../../assetsIndex/index';
import './steps.scss';

function Option(props) {
  const [title, img] = props;
  return (
    <div className="menu-steps-box">
      <img src={img} alt="" className="menu-steps-box-img" />
      <p>{title}</p>
    </div>
  );
}
export default function Steps() {
  return (
    <div className="menu-steps">
      <Option
        title="Subir archivos"
        img={png.uploadColor}
        alternative={png.uploadRaw}
      />
      <Option
        title="Seleccionar columnas"
        img={png.selectionColor}
        alternative={png.selectionRaw}
      />
      <Option
        title="Tipo de operacion"
        img={png.vennColor}
        alternative={png.vennRaw}
      />
      <Option
        title="Resultados"
        img={png.resultsColor}
        alternative={png.resultsRaw}
      />
    </div>
  );
}
