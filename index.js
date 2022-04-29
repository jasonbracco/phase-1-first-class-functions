function receivesAFunction(cb){
    return cb()
}
receivesAFunction(function(){return 'This gets stored in the cb variable after being passed as the arguement to the receivesAFunction function'})

function returnsANamedFunction(){
   return function hello(){
       console.log('Nom Nom')
   }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('Nom Nom')
    }
}



