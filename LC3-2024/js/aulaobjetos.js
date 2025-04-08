cadeira={};
cadeira.praia = { encosto: '', assento: '', perna: ''};
cadeira.jantar = { encosto: '', assento: '', perna: ''};
cadeira.escritorio = { encosto: '', assento: '', perna: ''};

cadeira.praia.encosto = 'plástico';
cadeira.praia.assento = 'plástico';
cadeira.praia.perna = '2';

cadeira.praia.descricao = function(){
    return ('A cadeira selecionada o encosto é: '+this.encosto
            +", o assento é: "+this.assento
            +", o número de pernas é: "+this.perna+'.')
}

console.log(cadeira.praia.descricao());


console.log(Object.values(cadeira.praia));
console.log(Object.assign(cadeira.praia));
console.log(Object.entries(cadeira.praia));
console.log(Object.keys(cadeira.praia));



