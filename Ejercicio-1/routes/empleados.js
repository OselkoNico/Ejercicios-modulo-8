import express from 'express';
const router = express.Router();

const empleados = [
    { nombre: 'Juan', apellidos: 'Gomez Gonzalez', edad: 23, id: 1 },
    { nombre: 'Ana', apellidos: 'Ambrosia Agua', edad: 18, id: 2 },
    { nombre: 'Osel', apellidos: 'Nicolas Benitez', edad: 29, id: 3 }
]

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Ok',
        empleados
    })
})

export default router;