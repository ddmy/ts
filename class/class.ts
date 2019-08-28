class Animal {
  step: number
  protected name?: string
  constructor(alias?:string) {
    this.name = alias || '小虎'
  }
  move(step: number) {
    console.log(`移动${step}`)
  }
}


class dog extends Animal {
  say: string
  readonly name?: string;
  private age: number
  constructor(str:string,alias?:string){
    super(alias)
    this.say = str
    this.age = (this.say as string).length
  }
  wang():string {
    return `${this.name}:${this.say}`
  }
  public tell():string {
    return '我是一直dog'
  }
  get sayInner():string {
    console.log('准备获取sayneirong')
    return this.say
  }
  set sayInner(str:string) {
    console.log('设置say内容')
    this.say = str
    console.log(this.say)
  }
}

let one = new dog('汪汪汪')
let two = new dog('咣咣咣', '小黑')

console.log(one, two)
console.log(one.wang(), two.wang())

console.log(one.sayInner)

one.sayInner = 'sdasdddsdsds'