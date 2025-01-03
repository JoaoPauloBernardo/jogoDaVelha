const celulas = document.querySelectorAll('.celula');
const titleHeader = document.querySelector('#TitleHeader');
const xPlayerDisplay = document.querySelector('xPlayerDisplay');
const oPlayerDisplay = document.querySelector('oPlayerDisplay');

//Passos para se fazer o jogo da velha:
// 1.Inicializar as variaveis para o jogo e garantir que todos os slots estao vazios
//Preciso inicializar as variáveis para o jogo
let player = 'X'
let jogoPausado = false
let comecouJogo = false

const inputCells = ['','','',
                    '','','',
                    '','','']

