 function compareMaior(array){
    let repositorio = 0;

     for(let index = 0; index < array.length; index++){
         if(array[index] > array[repositorio])
            repositorio = index;
        }
   return repositorio;
}

let teste = [3, 4, 14, 6, 9];

console.log(compareMaior(teste));


