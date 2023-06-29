import './App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const CreateNote = (props) => {

    const [expand, setExpand ] = useState(false);

    const [note, setNote] = useState ({
        title: "",
        content: ""
    });

    const InputEvent = (event) => {

        // const name = event.target.name;
        // const value = event.target.value;
        const {name, value} = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        });
    };

    const expandIt = () => {
        setExpand(true);
    };

    const backToNormal = () => {
        setExpand(false);
    };

    return (
        <>
            <div className="main_note">
                <form className='form_box'>
                    <div className="form_content">

                        {expand?
                        <input type="text" name="title" value={note.title} onChange={InputEvent}  placeholder='Title' autoComplete='off'/> : null}

                        <textarea name="content" value={note.content} onChange={InputEvent} id="" cols="35" rows="7" placeholder='Write a note...' onClick={expandIt} onDoubleClick={backToNormal}></textarea>
                    </div>

                    {expand?
                    <Button onClick={addEvent}>
                        <AddIcon className='add_icon'/>
                    </Button> : null}

                </form>
            </div>
        </>
    );
};

export default CreateNote;