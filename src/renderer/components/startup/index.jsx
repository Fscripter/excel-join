import Icon from '../../../../assets/icono.png';
import './index.scss';
import { connect } from 'react-redux';
import { Hide } from 'store/load/actions/actions';

function Autor() {
  return (
    <div id="Autor">
      <h2>
        Made by: <span>Fscripter and AndresM</span>
      </h2>
    </div>
  );
}
function Startup(props) {
  setTimeout(() => {
    props.Hide();
  }, 2000);
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

export default connect(
  (state) => {
    return state;
  },
  { Hide }
)(Startup);
