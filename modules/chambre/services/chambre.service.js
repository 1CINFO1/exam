import { gethotelById } from '../../hotel/services/hotel.service.js';
import Chambre from '../models/chambre.model.js';
export const getAllchambres = async () => {
    const chambres = await Chambre.find().lean();
    return chambres;
};

export const getchambreById = async (id) => {
    const chambre = await Chambre.findById(id).lean();

    return chambre;
};

export const createchambre = async (chambreData) => {
    const hotel = await gethotelById(chambreData.hotel);
    if (!hotel) throw new Error('hotel not found');
    const newchambre = new Chambre(chambreData);
    const savedchambre = await newchambre.save();
    return savedchambre;
};

export const updatechambre = async (id, chambreData) => {
    return await Chambre.findByIdAndUpdate(id, chambreData, { new: true });
};

export const deletechambre = async (id) => {
    return await Chambre.findByIdAndDelete(id);
};
