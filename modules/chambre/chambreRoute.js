import express from 'express';
import {
    getchambres,
    getchambre,
    createchambreHandler,
    updatechambreHandler,
    deletechambreHandler,
} from './controllers/chambre.controller.js';

const chambreRoutes = express.Router();

chambreRoutes.get('/', getchambres);
chambreRoutes.get('/:id', getchambre);
chambreRoutes.post('/add/:hotel', createchambreHandler);
chambreRoutes.put('/reserve/:id/:nom_client', updatechambreHandler);
chambreRoutes.delete('/:id', deletechambreHandler);

export default chambreRoutes;
