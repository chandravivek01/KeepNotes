import './App.css';
import Header from './Header';
import CreateNote from './CreateNote'
import Footer from './Footer';
import Note from './Note';
import { useState } from 'react';

function App() {

  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {

    // alert("I am clicked");
    setAddItem((prevData) => {
      return [...prevData, note]
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {/* <Note /> */}
      
        <div className="each_note flex">
          {addItem.map((val, index) => {
            return <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          })}
        </div>

      <Footer />
    </>
  );
}

export default App;
