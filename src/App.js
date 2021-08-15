import MyRouter from "./components/myRouter";
import { setLocation } from './redux/actions';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";



function App() {

  const dispatch = useDispatch();

  const ChangeLocation = item => dispatch(setLocation(item));
  const isOn = useSelector(state => state.isOn);

  var darkMode = false;
  useEffect(() => {
    ChangeLocation('tel aviv')
  },
    [])
  return (
    <div style={isOn ? { backgroundColor: "black", height: "100vh" } : null}>
      <MyRouter />
    </div>
  );
}

export default App;

