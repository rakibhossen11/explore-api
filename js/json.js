const user = {id: 1, name:'Rakib', job:'developer'};
// javascript object notation
const stringifed = JSON.stringify(user); 
// console.log(user);
// console.log(stringifed);

const shop = {
    woner: 'Rakib',
    address: {
        street: 'Seedstor bazar',
        city: 'bhaluka',
        country: 'BD'
    },
    products: ['mic','earphones','laptobs','pc'],
    revenue: 450000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);