import mongoose from 'mongoose';

const { Schema } = mongoose;

const HotelSchema = new Schema(
    {
        nom: { type: String, required: true },
        adresse: { type: String, required: true },
        nbChambre: { type: Number, default: 0 },
        email: { type: String, required: true },
    },

    {
        timestamps: true,
    }
);

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
