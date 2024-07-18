const { body } = require('express-validator');

const addFormValidationRules = () => [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email must be a valid email address'),
    body('rollNumber')
        .notEmpty().withMessage('Roll number is required')
        .isString().withMessage('Roll number must be a string'),
    body('contact')
        .notEmpty().withMessage('Contact is required')
        .isString().withMessage('Contact must be a string'),
    body('branch')
        .notEmpty().withMessage('Branch is required')
        .isString().withMessage('Branch must be a string'),
    body('year')
        .notEmpty().withMessage('Year is required')
        .isString().withMessage('Year must be a string'),
    body('date')
        .notEmpty().withMessage('Date is required')
        .isISO8601().withMessage('Date must be a valid ISO 8601 date'),
    body('purpose')
        .optional()
        .isString().withMessage('Purpose must be a string'),
    body('specificType')
        .optional()
        .isString().withMessage('Specific type must be a string'),
    body('category')
        .optional()
        .isString().withMessage('Category must be a string'),
    body('groupName')
        .optional()
        .isString().withMessage('Group name must be a string'),
    body('time')
        .notEmpty().withMessage('Time is required')
        .isString().withMessage('Time must be a string')
];

module.exports = {
    addFormValidationRules
};
