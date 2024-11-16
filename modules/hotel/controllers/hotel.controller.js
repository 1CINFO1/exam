import {
    getAllhotels,
    gethotelById,
    createhotel,
    updatehotel,
    deletehotel,
    gethotelByName,
    attaque,
} from '../services/hotel.service.js';

export const gethotelsHandler = async (_req, res) => {
    try {
        const hotels = await getAllhotels();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const gethotelHandler = async (req, res) => {
    try {
        const hotel = await gethotelById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'hotel not found' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const gethotelByNameHandler = async (req, res) => {
    try {
        const hotel = await gethotelByName(req.params.name);
        if (!hotel) {
            return res.status(404).json({ message: 'hotel not found' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createhotelHandler = async (req, res) => {
    const hotelDTO = req.body;

    try {
        const hotel = await createhotel(hotelDTO);
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updatehotelHandler = async (req, res) => {
    const hotelDTO = req.body;

    try {
        const hotel = await updatehotel(req.params.id, hotelDTO);
        if (!hotel) {
            return res.status(404).json({ message: 'hotel not found' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const attaqueHandler = async (req, res) => {
    const { j1, j2 } = req.params;

    try {
        const hotel = await attaque(j1, j2);
        if (!hotel) {
            return res.status(404).json({ message: 'hotel not found' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletehotelHandler = async (req, res) => {
    try {
        const hotel = await deletehotel(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'hotel not found' });
        }
        res.status(200).json({ message: 'hotel deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
