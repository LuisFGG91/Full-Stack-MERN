import React from 'react';
import Button from '@mui/material/Button';

const MovieList = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }

    return props.movies.map((item, index) => {
        return (
            <Button
                key={index} // Agregamos una key para ayudar a React con la lista de elementos
                variant="contained" // Esto aplica el estilo "contained" al botón
                color="primary" // Esto establece el color principal del tema a los botones
                onClick={(e) => onClickHandler(e, item)}
                style={{ margin: '10px' }} // Estilo adicional como ejemplo
            >
                {item}
            </Button>
        );
    });

}

export default MovieList;
