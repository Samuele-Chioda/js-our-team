// array di oggetti:

let team = [{
    nome:('Wayne Barnett'),
    ruolo:('founder & CEO'),
    img:('wayne-barnett-founder-ceo.jpg')
},
{
    nome:('Angela Caroll'),
    ruolo:('Chief Editor'),
    img:('angela-caroll-chief-editor.jpg')
},
{
    nome:('Walter Gordon'),
    ruolo:('Office Manager'),
    img:('walter-gordon-office-manager.jpg')
},
{
    nome:('Angela Lopez'),
    ruolo:('Social Media Manager'),
    img:('angela-lopez-social-media-manager.jpg')
},
{
    nome:('Scott Estrada'),
    ruolo:('Developer'),
    img:('scott-estrada-developer.jpg')
},
{
    nome:('Barbara Ramos'),
    ruolo:('Graphic Designer'),
    img:('barbara-ramos-graphic-designer.jpg')
},
];

console.log(team);

// aggiungo ciclo for of che itera su ogni oggetto dell'array e stampa le info che ho definito
for (let membroTeam of team) {
    console.log('Nome: ' + membroTeam.nome);
    console.log('Ruolo: ' + membroTeam.ruolo);
    console.log('img: ' + membroTeam.img);
    // spazio tra informazioni di un oggetto e un altro con il trattino
    console.log('-');
}
