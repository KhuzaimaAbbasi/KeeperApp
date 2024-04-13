import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [final, setfinal] = useState([]);

  function AddClick(Text) {
    setfinal((Prev) => {
      return [...Prev, Text];
    });
  }

  function Delete(id) {
    setfinal((Prev) => {
      return Prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea Add={AddClick} />

      {final.map((item, index) => (
        <Note key={index} ID={index} note={item} check={Delete} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
