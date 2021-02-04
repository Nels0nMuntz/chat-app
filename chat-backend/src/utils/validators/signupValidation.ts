import { check } from 'express-validator';

export default [
    check('email').isEmail(), 
    check('firstName').isAlpha('ru-RU' || 'uk-UA'),
    check('lastName').isAlpha('ru-RU' || 'uk-UA'),
    check('password').isLength({ min: 8, max: 20 }).isAlphanumeric()
];