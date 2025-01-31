import { trimAndLowercaseText } from './str.js';

/**
 * Validates an email address.
 *
 * @param {string} email - The email address to be validated.
 * @return {string|null} - The validated email address if it is valid, otherwise null.
 */
export function validateEmail(email) {
  if (!email) return null;
  const emailRegex =
    /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const nonLatinCode = /[^\u0000-\u00ff]/;
  const onlyLetters = /^[A-Za-z]+$/;
  if (!onlyLetters.test(email[email.length - 1])) {
    email = email.substring(0, email.length - 1);
  }
  return emailRegex.test(email) &&
    !nonLatinCode.test(email) &&
    onlyLetters.test(email[0]) &&
    onlyLetters.test(email[email.length - 1])
    ? trimAndLowercaseText(email)
    : null;
}

/**
 * Validates a mobile number.
 *
 * @param {string} mobile - The mobile number to be validated.
 * @return {string|null} - Returns the validated mobile number if it is valid, otherwise returns null.
 */
export function validateMobile(mobile) {
  if (!mobile) return null;
  const mobileRegex = /^\d{9}$/;
  return mobileRegex.test(mobile) ? mobile : null;
}

/**
 * Validates a NIF (Número de Identificação Fiscal) - a Portuguese tax identification number.
 *
 * @param {string} nif - The NIF to be validated.
 * @return {boolean} Returns true if the NIF is valid, false otherwise.
 */
export function validateNIF(nif) {
  // Check if the NIF is an empty string
  if (nif === '') {
    return false;
  }

  // Check if the NIF has 9 digits
  if (nif.length !== 9) {
    return false;
  }

  // Define validation sets
  const validationSets = {
    one: ['1', '2', '3', '5', '6', '8'],
    two: [
      '45',
      '70',
      '71',
      '72',
      '74',
      '75',
      '77',
      '79',
      '90',
      '91',
      '98',
      '99',
    ],
  };

  // Check if the first digit of the NIF is valid
  if (
    !validationSets['one'].includes(nif.substring(0, 1)) &&
    !validationSets['two'].includes(nif.substring(0, 2))
  ) {
    return false;
  }

  // Convert the NIF to an array of digits
  const splittedNif = nif.split('');

  // Calculate the total using the weighted sum of the digits
  const total =
    parseInt(splittedNif[0]) * 9 +
    parseInt(splittedNif[1]) * 8 +
    parseInt(splittedNif[2]) * 7 +
    parseInt(splittedNif[3]) * 6 +
    parseInt(splittedNif[4]) * 5 +
    parseInt(splittedNif[5]) * 4 +
    parseInt(splittedNif[6]) * 3 +
    parseInt(splittedNif[7]) * 2;

  // Calculate the remainder of the total divided by 11
  const remainderOfEleven = total % 11;

  // Calculate the check digit
  const checkDigit = remainderOfEleven < 2 ? 0 : 11 - remainderOfEleven;

  // Check if the check digit matches the last digit of the NIF
  return `${checkDigit}` === nif[8];
}
