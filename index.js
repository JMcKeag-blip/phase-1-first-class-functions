function receivesAFunction(callback) {
    callback()
  }
  
  function returnsANamedFunction() {
    return function named() {
      console.log("Herp")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Derp')
    }
  }