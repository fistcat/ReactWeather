// function getTempCallback(location,callback){
//   callback(undefined,78);
//   callback('City not found');
// }
//
// getTempCallback('New York',function(err,temp){
//   if (err){
//     console.log('error',err);
//   } else{
//     console.log('success',temp);
//   }
// });
//
// function getTempPromise (location){
//   return new Promise(function(resolve,reject){
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('New York').then(function(temp){
//   console.log('promise success',temp);
// },function(err){
//   console.log('promise fail',err);
// })

function addPromise (a,b){
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b ==='number')
    {
      resolve(a+b);
    }
    else{
      reject('input fail');
        }
  })
}
addPromise(2,6).then(function(sum){
  console.log('promise success', sum);
},function(err){
  console.log('promise fail', err);
});

addPromise('2',6).then(function(sum){
  console.log('promise success', sum);
},function(err){
  console.log('promise fail', err);
});
