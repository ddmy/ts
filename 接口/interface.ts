interface People {
  name: string
  age: number
  hobby?: string
}

function detail(people: People): string {
  let str = `${people.name} 今年 ${people.age} 岁了`
  if (people.hobby) {
    str += ` 爱好${people.hobby}`
  }
  return str
}

console.log(detail({
  name: 'jack',
  age: 18
}))
console.log(detail({
  name: 'tom',
  age: 22,
  hobby: 'coding'
}))

// 只读属性
interface Hose {
  readonly city: string
  size: number
}

let myHome: Hose = {
  city: '北京',
  size: 100
}

myHome.size = 200
// myHome.city = '西安' error

let arr: number[] = [1,2,3,4]
let arr2: Array<string> = ['123', '456', '789']

let ages: ReadonlyArray<number> = arr

let nums: ReadonlyArray<string> = arr2
arr2[0] = '789'

console.log(nums)

// 额外的属性检查
interface Squareconfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: Squareconfig):{ color: string; area: number} {
  return {
    color: config.color || config.colors || 'skyblue',
    area: config.width || 0
  }
}

let oneSquare = createSquare({
  color: 'red'
})

console.log(oneSquare)

let twoSquare = createSquare({
  colors: 'red, green',
  width: 100
} as Squareconfig)

let threeSquare = createSquare({
  colors: 'yellow pink',
  width: 1000
})

console.log(threeSquare)

console.log(twoSquare)

// 函数类型
interface SearchParams {
  page: number,
  pageSize: number,
  category?: string
}
interface SearchFn {
  (options: SearchParams):boolean
}

let getData: SearchFn

getData = function (options: SearchParams):boolean {
  return true
}

getData({
  page: 0,
  pageSize: 30
})

class search implements SearchParams {
  page: number
  pageSize: number
  constructor(page: number, pageSize: number) {
    this.page = page
    this.pageSize = pageSize
  }
}