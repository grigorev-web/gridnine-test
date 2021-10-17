
import "./App.css";
import "./css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/";
import TableFlights from "./components/TableFlights/";

function App() {
  
  return (
    <div className="App container">
      <h2 className="text-center text-secondary m-3">Gridnine тестовое задание <a href="#">source code</a></h2>
      <div className="content-wrapper">
        <Sidebar />
        <TableFlights />
      </div>
    </div>
  );
}

export default App;
