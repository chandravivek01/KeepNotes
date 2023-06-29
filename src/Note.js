import './App.css';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    };
    return (
        <>
            <div className="main_section">
                <div className="note">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    <Button onClick={deleteNote}>
                        <DeleteOutlineIcon />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Note;