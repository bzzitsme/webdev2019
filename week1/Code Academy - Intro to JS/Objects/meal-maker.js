 const menu = {
     _courses: {
         _appetizers: [],
         _mains: [],
         _desserts: [],

         get appetizers() {
             return this._appetizers
         },
         set appetizers(appetizerIn) {
             this._appetizers.push(appetizerIn);
         },

         get mains() {
             return this._mains
         },
         set mains(mainIn) {
             this._mains.push(mainIn);
         },

         get desserts() {
             return this._desserts
         },
         set desserts(dessertIn) {
             this._desserts.push(dessertIn);
         },
     },

     get courses() { 
         return {
             appetizers: this._courses.appetizers,
             mains: this._courses.mains,
             desserts: this._courses.desserts
         };
     },

     addDishToCourse(courseName, dishName, dishPrice) {
         const dish = {
             name: dishName,
             price: dishPrice
         };
         return this.courses[courseName].push(dish); 
     },

     getRandomDishFromCourse: function (courseName) {
         const dishes = this._courses[courseName];
         const randomDish = Math.floor(Math.random() * dishes.length);
         return dishes[randomDish];
     },

     generateRandomMeal: function () {
         const appetizer = this.getRandomDishFromCourse('appetizers');
         const mains = this.getRandomDishFromCourse('mains');
         const desserts = this.getRandomDishFromCourse('desserts');
         const totalPrice = appetizer.price + mains.price + desserts.price;
         return `Your meal is ${appetizer.name}, ${mains.name} and ${desserts.name}.  The total price for your meal is $${totalPrice}.`;
     }
 };



 menu.addDishToCourse('appetizers', 'salad', 5.50);
 menu.addDishToCourse('mains', 'fish', 6);
 menu.addDishToCourse('desserts', 'cake', 4);

 menu.addDishToCourse('appetizers', 'soup', 4.50);
 menu.addDishToCourse('mains', 'steak', 11);
 menu.addDishToCourse('desserts', 'ice cream', 3);


 let meal = menu.generateRandomMeal();
 console.log(meal);