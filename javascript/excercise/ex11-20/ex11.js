let arry = [
    {id:2, name:'kenji'},
    {id:4, name:'uro'},
    {id:3, name:'ken'},
    {id:1, name:'morita'},
];

arry.sort((a, b) => a.id - b.id);
console.log(arry);