[![Build Status](https://travis-ci.org/bakasho-libs/core.for_each.svg?branch=master)](https://travis-ci.org/bakasho-libs/core.for_each)

## core.for_each

Iterate over arrays and objects calling an iterator function in an optional this context

```javascript

var forEach = require("core.forEach");

var thisContext = { n: 100 };

forEach([10,20,30], function(v, i) {
  console.log(v, i, this.n );
  // 1 iteration logs : 10 0 100
  // 2 iteration logs : 20 1 100
  // 3 iteration logs : 30 2 100
}, thisContext);

var obj = { name: "bob" }

forEach(obj, function(v,k) {
  console.log(v, k, this.age); // logs bob name 95
}, { age: 95 });


```
