Supermarket = function() {
  this.prices = {fruit: 10, vegetables: 5, sweets: 3, shampoo: 7}
  this.basket = []
  this.basketValue = 0
}

Supermarket.prototype.add = function (item) {
  this.basket.push(item)
}

Supermarket.prototype.calculateTotal = function () {
  for(var i in this.basket) {
    this.basketValue += this.prices[this.basket[i]]
  }
}

Supermarket.prototype.checkout = function () {
  this.calculateTotal()
  return "£" + this.basketValue + ".00"
}
