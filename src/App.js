import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open / Close</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        123
      </Modal>
    </>
  );
}

export default App;
