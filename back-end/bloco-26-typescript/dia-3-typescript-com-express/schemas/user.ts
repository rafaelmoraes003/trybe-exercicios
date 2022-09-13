import joi from 'joi';

export const userSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi.string().min(6).max(12).required(),
});