/* eslint-disable node/no-unsupported-features/es-syntax */
import {
    getAllchambres,
    getchambreById,
    createchambre,
    updatechambre,
    deletechambre,
} from '../services/chambre.service.js';

export const getchambres = async (req, res) => {
    try {
        const chambres = await getAllchambres();
        res.status(200).json(chambres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getchambre = async (req, res) => {
    try {
        const chambre = await getchambreById(req.params.id);
        if (!chambre) {
            return res.status(404).json({ message: 'chambre not found' });
        }
        res.status(200).json(chambre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createchambreHandler = async (req, res) => {
    const chambreDTO = req.body;
    const { hotel } = req.params;
    console.log(chambreDTO);
    const body = { ...chambreDTO, hotel, reservee: 'false', nom_client: '' };
    try {
        const chambre = await createchambre(body);
        res.status(201).send(chambre);
    } catch (error) {
        console.log('Error creating chambre');

        res.status(400).json({ error: error.message });
    }
};

export const updatechambreHandler = async (req, res) => {
    const { id, nom_client } = req.params;

    try {
        const chambre = await updatechambre(id, {
            nom_client,
            reservee: 'true',
        });
        if (!chambre) {
            return res.status(404).json({ message: 'chambre not found' });
        }
        res.status(200).json(chambre);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletechambreHandler = async (req, res) => {
    try {
        const chambre = await deletechambre(req.params.id);
        if (!chambre) {
            return res.status(404).json({ message: 'chambre not found' });
        }
        res.status(200).json({ message: 'chambre deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
