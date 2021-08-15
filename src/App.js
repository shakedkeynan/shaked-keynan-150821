import MyRouter from "./components/myRouter";
import { setLocation } from './redux/actions';
import { connect, useSelector } from 'react-redux';
import { useEffect } from "react";

const mapDispatchToProps = (dispatch) => ({
  setLocation: (item) => dispatch(setLocation(item))
})

function App(props) {

  const isOn = useSelector(state => state.isOn);
  
  var darkMode = false;
  useEffect(() => {
    props.setLocation('tel aviv')
  },
    [])
  return (
    <div style={isOn ? { backgroundColor: "black", height: "100vh" } : null}>
      <MyRouter />
    </div>
  );
}

export default connect(
  null,
  mapDispatchToProps

)(App);

