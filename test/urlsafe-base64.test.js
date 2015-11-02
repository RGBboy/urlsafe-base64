/**
 * URL Safe Base64 Unit Tests
 */

/**
 * Module dependencies.
 */

var should = require('should'),
    URLSafeBase64 = require('../'),
    SafeCharacters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 - _'.split(' ');
    UnsafeCharacters = '+ / \\ = ` ~ ! @ # $ % ^ & * ( ) " \' ; : [ ] { } | < > , . ?'.split(' ');
/**
 * Tests
 */

describe('URL Safe Base64', function () {

  describe('.version', function () {

    it('should match the format x.x.x', function (done) {
      URLSafeBase64.version.should.match(/^\d+\.\d+\.\d+$/);
      done();
    });

  });

  describe('.encode', function () {

    it('should be a function', function (done) {
      URLSafeBase64.encode.should.be.a.function;
      done();
    });

    it('should encode a buffer correctly', function (done) {
      var testBase64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          testBuffer = new Buffer(testBase64, 'base64'),
          expectedBase64 = testBase64.replace('+', '-').replace('/', '_');
      URLSafeBase64.encode(testBuffer).should.equal(expectedBase64);
      done();
    });

    it('should encode anArrayBuffer correctly', function(done) {
      var testBase64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          testBuffer = new Uint8Array(new Buffer(testBase64, 'base64')).buffer,
          expectedBase64 = testBase64.replace('+', '-').replace('/', '_');
      URLSafeBase64.encode(testBuffer).should.equal(expectedBase64);
      done();
    });

    it('should encode a string correctly', function(done) {
      var testBase64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          testBuffer = new Buffer(testBase64, 'base64').toString('hex'),
          expectedBase64 = testBase64.replace('+', '-').replace('/', '_');
      URLSafeBase64.encode(testBuffer, 'hex').should.equal(expectedBase64);
      done();
    });
  });

  describe('.decode', function () {

    it('should be a function', function (done) {
      URLSafeBase64.decode.should.be.a.function;
      done();
    });

    it('should decode a base64 string correctly', function (done) {
      var encodedBase64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/',
          normalBase64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          testBuffer = new Buffer(normalBase64, 'base64'),
          decoded = URLSafeBase64.decode(encodedBase64);
      decoded.should.be.an.instanceof(Buffer);
      decoded.toString('utf8').should.equal(testBuffer.toString('utf8'));
      done();
    });

  });

  describe('.validate', function () {

    it('should be a function', function (done) {
      URLSafeBase64.validate.should.be.a.function;
      done();
    });

    it('should return true for strings of allowed characters', function (done) {
      var i;
      for (i = 0; i < SafeCharacters.length; i += 1) {
        URLSafeBase64.validate(SafeCharacters[i]).should.equal(true);
      };
      URLSafeBase64.validate(SafeCharacters.join('')).should.equal(true);
      done();
    });

    it('should return false for strings that do not contain only allowed characters ', function (done) {
      var i;
      for (i = 0; i < UnsafeCharacters.length; i += 1) {
        URLSafeBase64.validate(SafeCharacters.join('') + UnsafeCharacters[i]).should.equal(false);
      };
      done();
    });

  });

});
