// var names =['Andrew','Chen','Bing'];
//
// names.forEach(function(name){
//   console.log('forEach',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc' , name);
// });
//
// names.forEach((name) =>console.log(name));

// var returnMe = (name) => name +'!';
// console.log(returnMe('Chen'));

// var person = {
//   name:'Chen',
//   greet :function(){
//     names.forEach((name) =>{
//       console.log(this.name + ' says hi to' + name);
//     })
//   }
// }
//
// person.greet();

//Challenge area
function add(a,b){
  return a + b;
}

//addExpression
var addExpression = (a,b) => a+b; //everything on the rigth side will be return automatically
//addStatement
var addStatement = (a,b) => {
  return(a+b);
}
// console.log(add(1,3));
// console.log(add(9,0));

console.log(addExpression(1,3)); //4
console.log(addStatement(1,3));  //4
