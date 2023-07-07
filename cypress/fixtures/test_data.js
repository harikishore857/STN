import {generateFullName, generatePassword, generateRandomEmail} from '../utilities/utils';

export const userDetails = {
    email: generateRandomEmail(),
    username: generateFullName(),
    password: generatePassword(9)
}