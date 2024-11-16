import mongoose from 'mongoose';

const { Schema } = mongoose;

const ChambreSchema = new Schema(
    {
        numero: { type: Number, required: true },
        hotel: {
            type: String,
            ref: 'Hotel',
            required: true,
        },
        reservee: {
            type: String,
            required: true,
        },
        nom_client: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Chambre = mongoose.model('Chambre', ChambreSchema);

export default Chambre;
