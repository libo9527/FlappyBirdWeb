(function () {
    "use strict";

    // 函数声明
    // function Animal() {
    //
    // }

    // 函数表达式
    var Animal = function (name, age) {
        this.name = name;
        this.age = age;
    };

    Animal.prototype.say = function () {
        console.log(this.name + '  ' + this.age);
    };

    // var cat = new Animal('小猫', 3);
    // cat.say();
    //
    //
    // // call() apply()
    // // 调用一个对象的一个方法，用另一个对象替换当前对象
    //
    // Animal.prototype.say.call(cat);
    //
    // var parames = {
    //     name: '小猫2',
    //     age: 4
    // };
    //
    // cat.say.call(parames);

    // 寄生组合继承
    var Cat = function (name, age) {
        // Animal.apply(this, arguments);
        // Animal.prototype.say.apply(this, [name, age]);
        Animal.prototype.say.call(this, name, age);
    };

    Cat.prototype = Object.create(Animal.prototype);
    // 区分
    // Cat.prototype = new Animal();
    Cat.prototype.say = function () {
        var p = {
            name: '父类名字',
            age:10
        };
        Animal.prototype.say.apply(p);
        console.log('这是子类的名字' + this.name + this.age);
    }

    var cat1 = new Cat('子猫', 5);
    cat1.say();
})();