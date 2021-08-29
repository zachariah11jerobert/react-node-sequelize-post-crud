import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response.data);
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
