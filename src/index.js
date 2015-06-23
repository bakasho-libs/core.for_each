var isNullOrUndefined = require("core.is_null_or_undefined"),
    bindFunctionToObject = require("core.bind_function_to_object"),
    isArrayLike = require("core.is_array_like"),
    keys = require("core.keys");

module.exports = forEach;

function forEach(coll, fn, ctx) {

    fn = isNullOrUndefined(ctx) ? fn : bindFunctionToObject(fn, ctx);

    if (isArrayLike(coll)) {

        return forEachArray(fn, coll);

    } else {

        return forEachObject(fn, coll);

    }

}


function forEachArray(fn, coll) {
    var len = coll.length,
        index = -1;

    while (++index < len) {
        fn(coll[index], index);
    }

}

function forEachObject(fn, obj) {
    var objKeys = keys(obj),
        len = objKeys.length,
        k,
        index = -1;

    while (++index < len) {

        k = objKeys[index];

        fn(obj[k], k);

    }

}
