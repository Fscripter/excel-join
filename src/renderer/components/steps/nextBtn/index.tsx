import next from '../../../../../assets/Buttons/next.png';
import './styles.scss';

interface IBtnStatus {
  allowed: boolean;
  clickable: () => void;
}

function NextBtn(props: IBtnStatus) {
  const { allowed, clickable } = props;
  if (allowed) {
    return (
      <button className="nextButton" onClick={clickable}>
        <img src={next} alt="" />
        <p>Siguiente</p>
      </button>
    );
  }
  return null;
}

export { NextBtn };
