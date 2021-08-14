import MyRouter from "./components/myRouter";


function App() {

  var darkMode = false;
  
  return (
    <div style={darkMode?{backgroundColor:"blue", height:"100vh"}:null}>
      <MyRouter />
    </div>
  );
}

export default App;
