var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(alias) {
        this.name = alias || '小虎';
    }
    Animal.prototype.move = function (step) {
        console.log("\u79FB\u52A8" + step);
    };
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(str, alias) {
        var _this = _super.call(this, alias) || this;
        _this.say = str;
        _this.age = _this.say.length;
        return _this;
    }
    dog.prototype.wang = function () {
        return this.name + ":" + this.say;
    };
    dog.prototype.tell = function () {
        return '我是一直dog';
    };
    Object.defineProperty(dog.prototype, "sayInner", {
        get: function () {
            console.log('准备获取sayneirong');
            return this.say;
        },
        set: function (str) {
            console.log('设置say内容');
            this.say = str;
            console.log(this.say);
        },
        enumerable: true,
        configurable: true
    });
    return dog;
}(Animal));
var one = new dog('汪汪汪');
var two = new dog('咣咣咣', '小黑');
console.log(one, two);
console.log(one.wang(), two.wang());
console.log(one.sayInner);
one.sayInner = 'sdasdddsdsds';
