import express from 'express';
import {
    gethotelsHandler,
    gethotelHandler,
    createhotelHandler,
    updatehotelHandler,
    deletehotelHandler,
    gethotelByNameHandler,
    attaqueHandler,
} from './controllers/hotel.controller.js';
import { validate } from '../../middleware/validate.js';

const hotelRoutes = express.Router();

hotelRoutes.get('/list', gethotelsHandler);
hotelRoutes.get('/getById/:id', gethotelHandler);
hotelRoutes.get('/:name', gethotelByNameHandler);
hotelRoutes.post('/add', validate, createhotelHandler);
hotelRoutes.put('/:id', updatehotelHandler);
hotelRoutes.put('/:j1/:j2', attaqueHandler);

hotelRoutes.delete('/delete/:id', deletehotelHandler);

export default hotelRoutes;
