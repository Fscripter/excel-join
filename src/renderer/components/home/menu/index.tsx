import error from '../../../../../assets/Buttons/error.png';
import pending from '../../../../../assets/Buttons/pending.png';
import checked from '../../../../../assets/Buttons/correct.png';

interface IStepInfo {
  name: string;
  status: string;
}
interface IStepIndex {
  steps: number;
}
function Step(props: IStepInfo) {
  const { name, status } = props;

  let imgUrl = error;
  if (status === 'pending') {
    imgUrl = pending;
  } else if (status === 'done') {
    imgUrl = checked;
  }
  return (
    <div className={`Home-Menu-Steps-Box ${status}`}>
      <img src={imgUrl} alt="" />
      {name}
    </div>
  );
}

export default function Menu(props: IStepIndex) {
  const stepsTitle = [
    'Subir archivos',
    'Seleccion o comparacion',
    'Tipo de Join',
    'Descarga de archivos',
  ];
  const { steps } = props;
  return (
    <div className="Home-Menu">
      <div className="Home-Menu-Title">
        <h2>Pasos a realizar: </h2>
      </div>
      <div className="Home-Menu-Steps">
        {stepsTitle.map((x, index) => {
          if (index === steps) {
            return <Step name={x} status="pending" />;
          }
          if (index > steps) {
            return <Step name={x} status="error" />;
          }
          return <Step name={x} status="done" />;
        })}
      </div>
    </div>
  );
}
