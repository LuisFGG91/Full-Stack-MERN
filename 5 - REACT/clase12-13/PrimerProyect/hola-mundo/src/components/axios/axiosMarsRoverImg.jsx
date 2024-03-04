import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, TextField, Button, Card, CardMedia, CircularProgress } from '@mui/material'


var headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://master.d2enn70zeexset.amplifyapp.com", // Asegúrate de configurar esto de acuerdo a tus necesidades
    "Access-Control-Allow-Methods": "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT ", // Asegúrate de configurar esto de acuerdo a tus necesidades
    "Access-Control-Allow-Headers": "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Content-Security-Policy": "default-src 'self'", // Asegúrate de configurar esto de acuerdo a tus necesidades
};
const MarsRoverImg = () => {
    //Nota que el segundo argumento es un array vacío. 

    const [date, setDate] = useState('');
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchImages = async () => {
        if (!date) {
            alert('Fecha invalida')
            return;
        }
        setLoading(true);

        try {
            axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
                headers: headers,
                params: {
                    earth_date: date,
                    api_key: 'DEMO_KEY'
                },
            }).then(response => {

                console.log(response)
                setImages(response.data.photos)

            }).catch(error => {
                console.error("Error al obtener las imagenes ", error);
                alert("Error al obtener las imagenes ", error)
            });
        } catch (error) {
            console.log("Error al obtener las imagenes", error)
            alert("Error al obtener las imagenes", error)

        }
        setLoading(false);
    }

    return (
        <Container>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <TextField
                        type="date"
                        label="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={fetchImages} disabled={isLoading}>
                        {isLoading ? <CircularProgress size={24} /> : 'Get Images'}
                    </Button>
                </Grid>
            </Grid>
            {isLoading && <CircularProgress />}
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                {images.map((photo, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={photo.img_src}
                                alt={`Mars Rover Image ${index + 1}`}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default MarsRoverImg;