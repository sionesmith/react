function greetUser (first,lastName){
    console.log(`hello, ${first} ${lastName}!`)
} greetUser("john","doe");






const multiply =(a,b = 1) => {
    console.log(a*b);
} 

const user = {
  id: 42,
  isVerified: true,
  name: "Akriti Adler",
};

const colors = ["red", "green", "blue"];


const {id,name,} = user; 
const[red,second] = colors;
console.log(`${id} ${name}`);
console.log(`${red}  ${second}`);