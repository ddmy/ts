function type<T>(params:T):T {
  return params
}

type<number>(8)

interface GenericIdentityFn {
  <T>(arg:T):T
}

function fn<T>(arg:T):T {
  return arg
}

let test: GenericIdentityFn = fn