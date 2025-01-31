/**
 * Capitalizes the first letter of each word in a given string.
 *
 * @param {string} text - The string to be capitalized.
 * @return {string} The capitalized string.
 */
export function capitalizeString(text) {
  return (
    text
      ?.trim()
      ?.toLowerCase()
      ?.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase())) ||
    null
  );
}

/**
 * Splits a full name into first name and last name.
 *
 * @param {string} name - The full name to be split.
 * @return {object} An object containing the first name and last name.
 */
export function splitFirstAndLastName(name) {
  if (!name) return null;
  const fullName = name.split(' ');
  let firstName = fullName[0];
  let lastName = fullName.slice(1, fullName.length).join(' ');
  if (lastName === '') {
    firstName = '';
    lastName = fullName[0];
  }
  return { firstName, lastName };
}

/**
 * Trims leading and trailing whitespace from the given text, converts it to lowercase, and removes all spaces.
 *
 * @param {string} text - The text to be trimmed, converted to lowercase, and spaces removed.
 * @return {string} - The modified text with leading and trailing whitespace removed, converted to lowercase, and with all spaces removed.
 */
export function trimAndLowercaseText(text) {
  if (!text) return null;
  return text.toLowerCase().split(' ').join('');
}
