const isLogged = true;

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
    return new Promise ((resolve, reject) => {
    if (number > 0.5){
        resolve({name: 'John', age: 24});
    } else {
        reject('Error tipo: Número menor de 0.5');
    }
});

};

promise
    .then((mathRandom) => {
        return promise2(mathRandom);
    })
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.error(err)
    })
    .finally(() => console.log("Arepa"))

