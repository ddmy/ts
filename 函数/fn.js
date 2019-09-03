function add(x, y) {
    return x + y;
}
function strAdd(x, y) {
    return x + y + '';
}
var myAdd;
myAdd = function (x, y) {
    return x + y;
};
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'uooooo'; }
    return firstName + '·' + lastName;
}
console.log(buildName('哈利'));
console.log(buildName('uiui', '天涯'));
function allMembers(caption) {
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    return caption + ',' + other.join(',');
}
console.log(allMembers('tom', '胡凯莉', '五五开', '大司马', '小智', 'PDD', 'gogoing'));
