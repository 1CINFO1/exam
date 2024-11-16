/* eslint-disable node/no-unsupported-features/es-syntax */
import Hotel from '../models/hotel.model.js';
export const getAllhotels = async () => {
    const hotels = await Hotel.find();
    return hotels;
};

export const gethotelById = async (id) => {
    const hotel = await Hotel.findById(id).lean();
    return hotel;
};
export const gethotelByName = async (name) => {
    const hotel = await hotel.findOne({ pseudo: name }).lean();
    return hotel;
};

export const createhotel = async (hotelData) => {
    const newhotel = new Hotel({
        ...hotelData,
        nbChambre: 0,
    });
    const savedhotel = await newhotel.save();
    return savedhotel;
};

export const updatehotel = async (id, hotelData) => {
    return await Hotel.findByIdAndUpdate(id, hotelData, { new: true });
};
export const attaque = async (j1, j2) => {
    const hotel1 = await Hotel.findByIdAndUpdate(
        j1,
        {
            $inc: { score: 10 },
        },
        { new: true }
    );
    const hotel2 = await Hotel.findByIdAndUpdate(
        j2,
        {
            $inc: { sante: -20 },
        },
        { new: true }
    );
    return { hotel1, hotel2 };
};
export const deletehotel = async (id) => {
    return await Hotel.findByIdAndDelete(id);
};
