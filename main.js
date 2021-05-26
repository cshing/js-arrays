const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];




// 1. forEach - a nicer way of doing for loop

for(let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

companies.forEach((company, index, companies) => {
  console.log(company);
  console.log(index, company.name);
});




// 2. filter - filter out an array of items that fit conditions 

// a) Get 21 and order

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);


// b) Filter retail company

const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);


// c) Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

console.log(eightiesCompanies);


// d) Get companies that lasted for at least 10 years

const lastedThenYears = companies.filter(company => (company.end - company.start >= 10));

console.log(lastedThenYears);




// 3. map

// a) Create array of company names

// const companyNames = companies.map(function(company) {
//   return company.name;
// });

const companyNames = companies.map(company => company.name);

console.log(companyNames);

// b) Reconstruct data

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

console.log(testMap);

// c) Manupalate age data

const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age * 2);

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

console.log(agesSquare);
console.log(agesTimesTwo);
console.log(ageMap);




// 4. sort

// a) Sort companies by start year (asc years)

// const sortedCompanies = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

console.log(sortedCompanies);

// b) Sort ages
// const sortAges = ages.sort();   <-- this only looks at first digit number, not actually sorting the numbers

const sortAges = ages.sort((a, b) => a - b); // asc
// const sortAges = ages.sort((a, b) => b - a); // desc

console.log(sortAges);





// 5. reduce ** Don't forget the 0 which is the initial number

// a) Sum of age

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);

// b) Get total years for all comanies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears);




// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);