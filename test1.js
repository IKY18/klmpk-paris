//1
const calculateAge = (birthYear) => {
  return 2019 - birthYear;
};

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

//2
const addNumber = (...numbers) => {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3
const phi = 3.14;
const power = 2;

const calculateArea = (obj) => {
  return phi * Math.pow(obj.radius, obj.power);
};

let radius = 0;

radius = 21;
const area21 = calculateArea({radius, power});

radius = 7;
const area7 = calculateArea({radius, power});

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4
const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
};

makeAjaxRequest('www.google.com');

//////////// Bagian 2 //////////////

//1
// const helloWorld = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello World!");
//     }, 2000);
//   });
// };

// helloWorld().then((result) => {
//   console.log(result);
// });

//2
// const helloWorld = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello World!");
//     }, 2000);
//   });
// };

// const messages = async () => {
//   const msg = await helloWorld();
//   console.log(msg);
// };

// messages();

//3
const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
};

const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};

messages(); 

setTimeout(() => {
  messages(); 
}, 2000);

/*Nomor 1 dan 2 hanya di comment saja karena akan tabrakan dengan nomor 3,
karena cara kerjanya sama semua tinggal ditambahkan apa yang diminta pada
nomor-nomor berikutnya*/