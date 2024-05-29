const isLogged = false;

let promise = new Promise ((resolve, reject) => {
    let log = isLogged;
    if (log){
        const valorRandom = Math.random();
        console.log(valorRandom);
        resolve(valorRandom); 
    } else {
        reject('Error: Usuario no registrado')
    }
});

let promise2 = (number) => {
    return new Promise ((resolve) => {
    if (number > 0.5){
        resolve({name: 'John', age: 24});
    } else {
        throw new Error ('Error tipo: Número menor de 0.5');
    }
});

};

promise
    .then((mathRandom) => {
        return promise2(mathRandom);
    })
    .then((value) => {
        console.log(value);
    })
    .catch((Error) => {
        console.error(Error)
    })
    .finally(() => console.log("Arepa"))
