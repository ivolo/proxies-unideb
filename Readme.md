
# proxies-unideb

  Query the public proxies list from [Unideb](http://web.unideb.hu/~aurel192/proxylist.txt). Primarily used as a proxies source list to [proxies](https://github.com/ivolo/proxies).


## Example

Get a list of public proxies:

```js
unideb()(function (err, proxies) {
  // ..
});
```

And integrate into [proxies](https://github.com/ivolo/proxies) as a source:

```js
var unideb = require('proxies-unideb');
var Proxies = require('proxies');

Proxies()
  .source(unideb());
```

## API

#### unideb()

  Create a new Unideb proxy source function.

## Licence

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```