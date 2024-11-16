import * as yup from 'yup';

export async function validate(req, res, next) {
    try {
        const Schema = yup.object().shape({
            adresse: yup.string().required(),
            email: yup.string().email().required(),
        });
        await Schema.validate(req.body);
        next();
    } catch (err) {
        res.status(400).send(err);
    }
}
