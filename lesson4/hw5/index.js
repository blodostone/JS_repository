// открыли цикл перебераем от 0 до 1к 
// после это присвоевоем в переменную
// созд. переменную и это результ 

//присвоить  на 1234

let max = 1000;
let result = 0;

for (let min = 0; min <= max; min++) {
    result += min;
}

let int = 0;
int = result / 1234;

let get = 0;
get = result % 1234;

switch (int < get) {
    case true:
        console.log(true)
        break;
    case false:
        console.log(false);
        break;
    default:
}