let isShow:Boolean = true
let age:number = 20
let names:string = 'jack'
let nameList:string[] = [names, 'tom']
let nameListTwo:Array<string> = [names, '张三']

// 元组
let home: [string, number, Boolean]
home = ['mom', 43, true]

// 枚举
enum  Color {red = 1, green = 2, '#369' = 3}
let myHoseColor:Color = Color.green

let notSure:any = 4

let len:number = (<string>names).length

function delay(time:number): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, time))
}

async function play ():Promise<Boolean> {
  console.log('开始玩')
  console.log(home)
  await delay(2000)
  console.log(myHoseColor)
  console.log('end')
  return true
}

console.log(play())