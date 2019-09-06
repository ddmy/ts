function test(flag:string | number): string | number {
  return flag + '1'
}
/// ???
test('!!@@@')
test(10)