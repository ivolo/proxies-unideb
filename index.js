
var request = require('superagent');

/**
 * Expose the `scrape`.
 */

module.exports = scrape;

/**
 * Return a Unixdeb proxies API.
 *
 * @param {String} apiKey
 * @param {Object} options
 * @return {Function}
 */

function scrape () {
  return function (callback) {
    request
      .get('http://web.unideb.hu/~aurel192/proxylist.txt')
      .end(function (err, res) {
        if (err) return callback(err);
        if (res.status !== 200) return callback(new Error('Failed to get unideb proxylist: ' + res.status));
        var proxies = [];
        res.text.split('\n').forEach(function (line) {
          if (line) proxies.push('http://' + line.split(' ')[0]);
        });
        callback(null, proxies);
      });
  };
}
