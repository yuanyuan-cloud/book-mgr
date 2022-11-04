var jwt = require('jsonwebtoken');
var token = jwt.sign({ 
  account: 'a.cc.com',
  _id: '123',
}, 'shhhhh');

console.log(token);

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2Njc1NjAwNDZ9.cSdisILBhDr0yX3Re1u1u1EeNMrglE0QA7taAhYPSvU
*/

// header
// 加密的算法 sha256
// jwt

// payload


// signature

