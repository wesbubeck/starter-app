const greeting = 'Hello World';
import jwt from 'jsonwebtoken';
console.log(jwt);
console.log(greeting);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');
