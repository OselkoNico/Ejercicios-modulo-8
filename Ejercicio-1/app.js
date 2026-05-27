import express from 'express';
import empleados from './routes/empleados.js'
const app = express();
const port = 3000;

app.use(express.json());

app.use('/empleados', empleados);
app.use((req, res) => {
    res.status(404).json({
        message: 'Incorrect route or params',
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})