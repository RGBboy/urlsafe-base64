/*!
 * urlsafe-base64
 * Copyright(c) 2013 RGBboy <me@rgbboy.com>
 * MIT Licensed
 */

/**
 * Module Dependencies
 */

// None yet!

/**
 * Library version.
 */

exports.version = '0.0.1';

/**
 * .encode
 *
 * return an encoded Buffer as URL Safe Base64
 *
 * Note: This function encodes to the RFC 4648 Spec where '+' is encoded 
 *       as '-' and '/' is encoded as '_'. The padding character '=' is 
 *       removed.
 *
 * @param {Buffer} buffer
 * @return {String}
 * @api public
 */

exports.encode = function encode(buffer) {

  return buffer.toString('base64')
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '='

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