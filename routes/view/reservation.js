import express from 'express';

const partieViewRoutes = express.Router();

partieViewRoutes.get('/', (req, res) => {
    res.render('reservation.twig');
});

export default partieViewRoutes;
