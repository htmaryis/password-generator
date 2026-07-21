const botao = document.getElementById("gerarSenha");
const opcTamanho = document.getElementById("tamanho");
const senhaGerada = document.getElementById("resultado");    

const letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const letrasMinusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numerosConjunto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const caracteresConjunto = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "?"]

function criarArraySenha(){

    const opcMaiuscula = document.getElementById("maiuscula").checked;
    const opcMinuscula = document.getElementById("minuscula").checked;
    const opcNumero = document.getElementById("numeros").checked;
    const opcCaracteres = document.getElementById("especiais").checked;

    const sorteador = [];

    if (opcMaiuscula) {
        sorteador.push(...letrasMaiusculas);    
} 
    if (opcMinuscula) {
        sorteador.push(...letrasMinusculas);    
} 
    if (opcNumero) {
        sorteador.push(...numerosConjunto);    
} 
    if (opcCaracteres) {
        sorteador.push(...caracteresConjunto);    
} 
    return(sorteador)
}

function primeiroCaracteres(opc){

let conjunto;

    switch (opc) {
        case 'maiuscula':
            conjunto = letrasMaiusculas;
            break;

        case 'minuscula':
            conjunto = letrasMinusculas;
            break;

        case 'numero':
            conjunto = numerosConjunto;
            break;

        case 'especial':
            conjunto = caracteresConjunto;
            break;
    }

    return conjunto[Math.floor(Math.random() * conjunto.length)];

}


function gerarSenha(){
    let tamanhoSenha = opcTamanho.options[opcTamanho.selectedIndex].text;
    const sorteador = criarArraySenha();
    let sorteado;
    const senhaSorteada = [];
    const opcPrimeiroCaractere = document.getElementById("primeiroCaractere").value;;

    if(opcPrimeiroCaractere==0){
        for(let i = 0; i< tamanhoSenha; i++){
        sorteado = sorteador[Math.floor(Math.random() * sorteador.length)];
        senhaSorteada.push(sorteado);
    }} else {
        senhaSorteada.push(primeiroCaracteres(opcPrimeiroCaractere));
        for(let i = 0; i< (tamanhoSenha-1); i++){
                sorteado = sorteador[Math.floor(Math.random() * sorteador.length)];
                senhaSorteada.push(sorteado);}  
}
    
    const senha = senhaSorteada.join("");
    senhaGerada.innerText = senha;
}


botao.addEventListener("click", gerarSenha)
    






