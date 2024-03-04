import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, TextField, Button, Card, CardMedia, CircularProgress } from '@mui/material'


const Mensaje = () => {
    //Nota que el segundo argumento es un array vacío. 


    const [mensaje, setMensaje] = useState('');
    const [isLoading, setLoading] = useState(false);

    const fetchMensaje = async () => {

        setLoading(true);

        try {
            axios.get('http://localhost:8000/api-v2').then(response => {

                console.log(response)
                setMensaje(response.message)

            }).catch(error => {
                console.error("Error al obtener Los mensajes ", error);
                alert("Error al obtener Los mensajes ", error)
            });
        } catch (error) {
            console.log("Error al obtener Los mensajes", error)
            alert("Error al obtener Los mensajes", error)

        }
        setLoading(false);
    }

    return (
        <Container>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <Button variant="contained" onClick={fetchMensaje} disabled={isLoading}>
                        {isLoading ? <CircularProgress size={24} /> : 'Get Message'}
                    </Button>
                </Grid>
            </Grid>
            {isLoading && <CircularProgress />}
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        {mensaje}
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Mensaje;