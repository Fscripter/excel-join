import { connect } from 'react-redux';
import './index.scss';
import { goNext } from 'store/steps/action';
import Outerpng from '../../../../../assets/Buttons/JOIN/outer.png';
import Leftpng from '../../../../../assets/Buttons/JOIN/left.png';
import Rightpng from '../../../../../assets/Buttons/JOIN/rigth.png';
import Innerpng from '../../../../../assets/Buttons/JOIN/inner.png';
import { NextBtn } from '../nextBtn';
import selectJoin from '../../../../store/search/action';

interface IComponentSearch {
  name: string;
  img: string | null;
  handleClick: () => void;
  unique: boolean;
}

function ComponentSearch(props: IComponentSearch) {
  console.log(props);
  const { name, img, handleClick, unique } = props;
  return (
    <div
      className={unique ? 'card card-selected' : 'card'}
      onClick={() => {
        if (unique) {
          handleClick();
          return;
        }
        handleClick(name);
      }}
    >
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
}

function Search(props) {
  console.log(props);
  const componentes = [
    ['Inner Join', Innerpng],
    ['Left Join', Leftpng],
    ['Right Join', Rightpng],
    ['Outer Join', Outerpng],
  ];
  let done = props.operation == null ? false : true;
  return (
    <div className="joinOperation">
      <div className="title">
        <h1>Seleccionar tipo de operacion</h1>
      </div>
      <div className="content">
        {componentes.map((elemento, index) => {
          if (props.operation == null) {
            return (
              <ComponentSearch
                name={elemento[0]}
                img={elemento[1]}
                handleClick={props.selectJoin}
              />
            );
          }
          if (props.operation === elemento[0]) {
            return (
              <ComponentSearch
                name={elemento[0]}
                img={elemento[1]}
                handleClick={props.selectJoin}
                unique={true}
              />
            );
          }
        })}
      </div>
      <div className="help">
        <a href="">¿Necesitas ayuda?</a>
      </div>
      <div className="next">
        <NextBtn allowed={done} clickable={props.goNext}></NextBtn>
      </div>
    </div>
  );
}
export default connect(
  (state) => {
    return state.searchReducer;
  },
  { selectJoin, goNext }
)(Search);
