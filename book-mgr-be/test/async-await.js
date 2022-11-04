// async-await

// Promise
// 回调函数

// 一个接口 要拿到数据 跑5个前置接口
const request = (arg,isReject) => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (isReject) {
        reject('出错啦');
        return;
      }
      console.log(arg);
      resolve(arg + 1);
    }, 300);
  });
};
// async 函数 返回的是一个 promise
const fn = async () => {
  const res1 = await request(1);
  const res2 = await request(res1);
  const res3 = await request(res2);
  const res4 = await request(res3);
  const res5 = await request(res4);
  console.log(res5);
};

// const fn = () => {
//   return new Promise((resolve, reject) => {
//     resolve(1);
//   })
// }

fn()

// const fn = async function () { }





// request(1)
//   .then((res1) => {
//     return request(res1,true);
//   })
//   .then((res2) => {
//     console.log('66666');
//     return request(res2);
//   }, (e) => {
//     console.log(e);
// })
//   .then((res3) => {
//     return request(res3);
// })
//   .then((res4) => {
//     return request(res4);
// })
//   .then((res5) => {
//     console.log('res5:',res5);
// })