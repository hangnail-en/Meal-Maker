const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return (this._meal = mealToCheck);
    } else {
      console.log('Not a string')
    };
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return (this._price = priceToCheck);
    } else {
      console.log('Not a valid price!')
    };
  },
  get todaysSpecial() {
    if (typeof this._meal === 'string' && typeof this._price === 'number') {
      console.log(`Today's special is Spaghetti for $5!`)
    } else {
      console.log('Meal or price was not set correctly!')
    };
  }
};

menu.meal = 'Rigatoni A La Vodka';
menu.price = 12;

menu.todaysSpecial;
