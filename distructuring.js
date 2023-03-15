// const book = {name: 'computer Programming',id: 16060, writer:'Tamim Shahariar',price:300,color:'Green'};
// const bookPrice = book.price;
// console.log(bookPrice);

// const bookName = book.name;
// console.log(bookName);

// /* distructuring example */
// const { name, id, writer, price, color } = book;
// console.log(id);

// distructring nested
const company = {
    name: 'TECH BD LTD',
    ceo: {
        name: 'Farjana_Bristy',
        id: 11141660,
        address: 'Dhaka, Bangladesh'
    },
    web: {
        work: ['web-development','front-end', 'back-end', 'full-stack'],
        employee: 30,
        framework: 'react',
        technology: {
            frontend: ['html', 'css', 'bootstrap'],
            backend: ['java-script', 'JSON', 'node js']
            }
    }
}
const webLanguage = company.web.technology.backend;
console.log(webLanguage);
console.log(company.ceo.name);


const employeeofCompany = company.webb?.employee; /* ternary operator */
console.log(employeeofCompany);