import { useState } from "react";
import NavBar from "./components/NavBar";
import TextEditor from "./components/TextEditor";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isTextChanged, _] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/:id"
          element={
            <NavBar isTextChanged={isTextChanged}>
              <TextEditor />
            </NavBar>
          }
        />
      </Routes>
    </>
  );
}

export default App;
