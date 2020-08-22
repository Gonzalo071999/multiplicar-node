const opts = {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    }
}

const argv = require('yargs')
    .command('listar', 'Imprimer la tabla de multiplicar', opts)

.command('crear', 'Genera la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}