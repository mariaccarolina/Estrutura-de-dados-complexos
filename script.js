// Crie um objeto que receba ao menos três propriedades sobre você.
    let carolina = {
        idade:28,
        banda:"NX Zero",
        música: "Espero a minha vez"
    }
    console.log(carolina)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
    carolina.cor = "cor de rosa"
    console.log(carolina)

// Remova uma propriedade desse objeto.
    delete carolina.idade;
    console.log(carolina)

//Mostre no console todas as propriedades desse objeto.
    carolina.idade = 28
    console.log(carolina)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
    let cadastro = ["Jana", "Suenia", "Cecy","Alexandra", "Azenate"];
    console.log(cadastro)

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
   let info = [{ 
    nome:"Jana",
    idade:24, 
    telefone: 557788889,
    amigos:["Carol", "Suênia"]},

    { nome:"Fer",
    idade:24, 
    telefone: 557788889,
    amigos:["Taty", "Pedro"]},

    {nome:"Karla",
    idade:24, 
    telefone: 557788889,
    amigos:["Matheus", "Camila"]},

    {nome:"Beth",
    idade:24, 
    telefone: 557788889,
    amigos:["Roberta", "Malu"]},
   ]

//Na propriedade amigos, adicione ao menos 4 itens.


// Mostre no console o nome de um amigo de cada lista.

info.map((info)=>{
    console.log('amigo de ',info.nome,'o amigo', info.amigos[0])
})


