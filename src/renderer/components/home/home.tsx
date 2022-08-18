import './home.scss';
import { connect } from 'react-redux';
import Upload from '../steps/upload';
import Selection from '../steps/selection';
import Search from '../steps/search';
import Download from '../steps/download';

import Icon from '../../../../assets/icono.png';
import Zaragoza from '../../../../assets/Zaragoza.png';
import Menu from './Menu';

function Nav() {
  return (
    <div className="Home-TopBar">
      <div className="Home-Icon">
        <img src={Icon} alt="" />
        <h1>Excel Join</h1>
      </div>
      <div className="Home-Town">
        <img src={Zaragoza} alt="" />
        <h1>Alcaldia de zaragoza</h1>
      </div>
    </div>
  );
}

function Home(props) {
  const stepList = [<Upload />, <Selection />, <Search />, <Download />];
  const { steps } = props.stepReducer;

  return (
    <div className="Home">
      <Nav />
      <div className="Zone">
        <Menu steps={steps} />
        <Viewer render={stepList[steps]} />
      </div>
    </div>
  );
}
function Viewer(props) {
  return <div className="Viewer">{props.render}</div>;
}

export default connect((state) => {
  return state;
}, null)(Home);
