import express from 'express';
import hotelRoutes from '../modules/hotel/hotelRoute.js';
import chambreRoutes from '../modules/chambre/chambreRoute.js';
import reservationRoutes from './view/reservation.js';

const router = express.Router();

router.use('/api/hotels', hotelRoutes);
router.use('/api/chambres', chambreRoutes);
router.use('/reservation', reservationRoutes);

export default router;
