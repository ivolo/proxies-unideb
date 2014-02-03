
var assert = require('assert');
var unideb = require('..');

describe('proxies-unideb', function () {
  this.timeout(10000);

  var proxies = unideb();

  it('should be able to query the proxies', function (done) {
    proxies(function (err, proxies) {
      if (err) return done(err);
      assert(Array.isArray(proxies));
      assert(proxies.length);
      done();
    });
  });
});