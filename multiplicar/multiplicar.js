//requireds
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

//const fs = require('expreess');
//const fs = require('../Path');

let listarTabla = (base, limite = 10) => {


    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}`);
    }


}




let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero')
            return; //Para salir
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base*i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);


        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}