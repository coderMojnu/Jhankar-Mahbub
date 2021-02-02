const ages = [10, 20, 30, 40];
const ages2 = [20, 50, 60, 80];
const ages3 = [30, 60, 90];
// const allAges = ages.concat(ages2).concat(ages3).concat(9);
const allAges = [...ages, ...ages2, ...ages3];
console.log(allAges);
const maximum = Math.max(...ages3);
console.log(maximum);
