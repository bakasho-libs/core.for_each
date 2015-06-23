var test = require("tape"),
    forEach = require("../src/index");


test("forEach : arrays", function(t) {

    var array = [1, 1, 1],
        ctx = {
            n: 1
        },
        res = 0;

    forEach(array, function(v, i) {
        res += v + i + this.n;
    }, ctx);

    t.equal(res, 9, "iterates over an array with function and context object");

    var r2 = 0;

    forEach(array, function(v, i) {
        r2 += v + i;
    });
    t.equal(r2, 6, "iterates over an array with function and no context object");

    if (typeof(Buffer) !== "undefined") {
        var buf = new Buffer([1, 1, 1]),
            rb = 0;

        forEach(buf, function(v) {
            rb += v;
        });

        t.equal(rb, 3, "iterates over Buffer with function");
    }

    t.end();

});

test("forEach : objects", function(t) {

    var o = {
            n1: 10,
            n2: 20
        },
        okeys = [],
        r1 = 0;

    forEach(o, function(v, k) {
        r1 += v + this.n;
        okeys.push(k);
    }, {
        n: 1
    });

    t.equal(r1, 32, "iterates over objects with function and context object");
    t.deepEqual(okeys, ["n1", "n2"], "iterates with correct keys over objects");

    t.end();

});
