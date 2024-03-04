import react, { useState } from 'react';
import '../../assets/style.css';

const MovieForm = (props) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if (e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        } else {
            setTitleError('');
        }
    }
    const onClickHandler = (e, value) => {
        alert(value);
    }

    {/*  resto del componente eliminado por brevedad */ }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="form-container">
            <div className="form-group">
                <label>Title: </label>
                <input type="text" onChange={handleTitle} />
                {
                    titleError ?
                        <p style={{ color: 'red' }}>{titleError}</p> :
                        ''
                }
            </div>

            <input type="submit" value="Create Movie" className="submit-button" />
        </form>
    );
}

export default MovieForm;