// 类型推论
class Animall {
  eat(food:string):string {
    return `吃饭${food}`
  }
}

class Dog extends Animall{
  name: string
  constructor(name:string) {
    super()
    this.name = name
  }
}
class Snake extends Animall {
  name:string
  constructor(name:string) {
    super()
    this.name = name
  }
}

// 如果候选类型没有合适的,我们可以明确指定类型
let zoo:Animall = [new Dog('tom'), new Snake('jack')]

// 存疑???? 

// 类型兼容

interface Named {
  name: string
}

class People {
  name:string
  constructor(name:string) {
    this.name = name
  }
  say(str:string):string {
    return `${this.name}对你说 : ${str}`
  }
}

let p:Named
p = new People('zhang')