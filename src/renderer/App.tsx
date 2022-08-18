import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

// import Load from './components/load/load';
import Startup from './components/startup';
import Home from './components/home/home';
function App(props) {
  return (
    <div className="app">{props.load === true ? <Startup /> : <Home />}</div>
  );
}
export default connect((state) => {
  return state.loadReducer;
}, null)(App);
