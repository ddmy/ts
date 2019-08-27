function detail(people) {
    var str = people.name + " \u4ECA\u5E74 " + people.age + " \u5C81\u4E86";
    if (people.hobby) {
        str += " \u7231\u597D" + people.hobby;
    }
    return str;
}
console.log(detail({
    name: 'jack',
    age: 18
}));
console.log(detail({
    name: 'tom',
    age: 22,
    hobby: 'coding'
}));
var myHome = {
    city: '北京',
    size: 100
};
myHome.size = 200;
// myHome.city = '西安' error
var arr = [1, 2, 3, 4];
var arr2 = ['123', '456', '789'];
var ages = arr;
var nums = arr2;
arr2[0] = '789';
console.log(nums);
function createSquare(config) {
    return {
        color: config.color || config.colors || 'skyblue',
        area: config.width || 0
    };
}
var oneSquare = createSquare({
    color: 'red'
});
console.log(oneSquare);
var twoSquare = createSquare({
    colors: 'red, green',
    width: 100
});
var threeSquare = createSquare({
    colors: 'yellow pink',
    width: 1000
});
console.log(threeSquare);
console.log(twoSquare);
var getData;
getData = function (options) {
    return true;
};
getData({
    page: 0,
    pageSize: 30
});
var search = /** @class */ (function () {
    function search(page, pageSize) {
        this.page = page;
        this.pageSize = pageSize;
    }
    return search;
}());
