function add(x: number, y: number):number {
  return x + y
}

function strAdd(x:number, y:number): string {
  return x + y + ''
}

let myAdd: (x: number, y: number) => number
myAdd = function (x: number, y: number):number {
  return x + y
}

function buildName(firstName: string, lastName = 'uooooo'): string {
  return firstName + '·' + lastName
}

console.log(buildName('哈利'))
console.log(buildName('uiui', '天涯'))

function allMembers(caption: string, ...other: string[]):string {
  return caption + ',' + other.join(',')
}

console.log(allMembers('tom', '胡凯莉', '五五开', '大司马','小智', 'PDD', 'gogoing'))
