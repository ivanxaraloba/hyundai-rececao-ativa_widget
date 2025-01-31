/**
 * Sleeps for a specified duration.
 * @param {number} ms - The duration to sleep in milliseconds.
 * @returns {Promise<void>} - A promise that resolves after the specified duration.
 */ export const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * A collection of math utility functions.
 * @namespace math
 */
export const math = {
  /**
   * Increments a number by a specified value.
   * @param {number} x - The number to increment.
   * @param {number} [y=1] - The value to increment by (default is 1).
   * @returns {number} - The incremented result.
   */
  increment: (x, y = 1) => x + y,

  /**
   * Subtracts a number by a specified value.
   * @param {number} x - The number to subtract from.
   * @param {number} [y=1] - The value to subtract (default is 1).
   * @returns {number} - The subtracted result.
   */
  subtract: (x, y = 1) => x - y,
};
