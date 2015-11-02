/*!
 * urlsafe-base64
 */

/**
 * Module Dependencies
 */

// None yet!

/**
 * Library version.
 */

exports.version = '1.0.0';

/**
 * .encode
 *
 * return an encoded Buffer as URL Safe Base64.  If buffer is a string,
 * it is coerced into a Buffer, optionally using the specified encoding.
 *
 * Note: This function encodes to the RFC 4648 Spec where '+' is encoded
 *       as '-' and '/' is encoded as '_'. The padding character '=' is
 *       removed.
 *
 * @param {Buffer|String} buffer
 * @param {String} [encoding] The encoding of buffer if it is a string.
 * @return {String}
 * @api public
 */

exports.encode = function encode(buffer, encoding) {
  if (buffer instanceof ArrayBuffer) {
    buffer = new Uint8Array(buffer);
  }
  if (!Buffer.isBuffer(buffer)) {
    buffer = new Buffer(buffer, encoding);
  }

  return buffer.toString('base64')
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '='

};

/**
 * .decode
 *
 * return an decoded URL Safe Base64 as Buffer
 *
 * @param {String}
 * @return {Buffer}
 * @api public
 */

exports.decode = function decode(base64) {

  // Add removed at end '='
  base64 += Array(5 - base64.length % 4).join('=');

  base64 = base64
    .replace(/\-/g, '+') // Convert '-' to '+'
    .replace(/\_/g, '/'); // Convert '_' to '/'

  return new Buffer(base64, 'base64');

};

/**
 * .validate
 *
 * Validates a string if it is URL Safe Base64 encoded.
 *
 * @param {String}
 * @return {Boolean}
 * @api public
 */

exports.validate = function validate(base64) {

  return /^[A-Za-z0-9\-_]+$/.test(base64);

};
