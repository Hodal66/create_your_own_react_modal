import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [model, setModel] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModel(true)} className="openModalBtn">
        show model
      </button>
      {model ? <Modal closeModal={setModel} /> : ""}
    </div>
  );
}

export default App;
