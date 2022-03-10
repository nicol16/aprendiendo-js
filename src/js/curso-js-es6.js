//FUNCIONES CON FLECHA


// const sayLocation = (location) => {
//     console.log(`My location is ${location}`);
// }

// sayLocation('paris');





/////////////////////////////////////////////////////
//utilizando objetos

// const user = {
//     name: 'Ed',
//     age: 25,
//     sayName: function(){
//         console.log(`My name is ${this.name}`);
//         const fullName = () => {
//             console.log(`My name is ${this.name} and my age is ${this.age}`)
//         };
//         fullName();
//     }

// };

// user.sayName();





/////////////////////////////////////////////////////////
//utilizando addeventlistener


// button.addeventlistener('click',function(){
//     var that = this;
//  var addFade = function(){
//     this.style.display = 'none';
//  };
// });




//////////////////////////////////////////////////////
//utilizando foreach

 //const shoppingList = ['Milk','Cow','Eggs','Bananas','Choco'];


// shoppingList.forEach((product, index) =>{
//     console.log(`The index is ${index} and the product is ${product}`);
// });





/////////////////////////////////////////////////////
//utilizando map


// const newlist = shoppingList.map(item => {
// return item + 'new';
// });


// console.log(newlist);





////////////////////////////////////////////////////
//utilizando filters


// const filterList = shoppingList.filter(item => item !== 'Eggs');


// console.log(filterList);




/////////////////////////////////////////////////////////
 //utilizando class


// class shoppingList{
//     constructor(items,nr){
//     this.items = items;
//     this.nr = nr;
//     }

//     sayList(){
//         console.log(this.items);
//     }
// }

// const myList = new shoppingList(['Milk, Choco, Redbull'], 3);


// console.log(myList);


// myList.sayList();



// class Product extends shoppingList{
//     constructor(items, nr,ammount, cost){
//         super(items,nr);
//         this.ammount = ammount;
//         this.ammount = cost;
//     }
// }


// const product = new Product(['Redbull, Chocolate, Candy'], 3, 2, 20);

// product.sayList();





////////////////////////////////////////////


//  const prom = new Promise((resolve, reject) =>{

//      setTimeout(() => {
//          reject(new Error('Something went wrong'));
//      }, 2000);
//  });


//  prom.then(data => {
//  console.log(data);
//  })

//  .catch(err => console.log(err));