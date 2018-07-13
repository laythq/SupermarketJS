describe ("Supermarket: ", function () {
  var supermarket
})

beforeEach(function () {
  supermarket = new Supermarket()
})

describe("prices", function() {
  it('lists all prices', function() {
    expect(supermarket.prices).toEqual({fruit: 10, vegetables: 5, sweets: 3, shampoo: 7})
  })

  it('lists specific prices', function() {
    expect(supermarket.prices['fruit']).toEqual(10)
  })
})

describe("basket", function() {
  it('starts with an empty basket', function () {
    expect(supermarket.basket).toEqual([])
  })
})

describe("#add", function() {
  it('adds an item to the basket', function() {
    supermarket.add('fruit')
    expect(supermarket.basket).toEqual(['fruit'])
  })
})

describe('#calculateTotal', function() {
  it('calculates the total basket value', function() {
    supermarket.add('fruit')
    supermarket.add('vegetables')
    supermarket.add('sweets')
    supermarket.add('shampoo')
    supermarket.calculateTotal()
    expect(supermarket.basketValue).toEqual(25)
  })
})

describe("checkout", function() {
  it('presents the total basket value in correct format', function() {
    supermarket.add('fruit')
    supermarket.add('vegetables')
    supermarket.add('sweets')
    supermarket.add('shampoo')
    expect(supermarket.checkout()).toEqual("£25.00")
  })
})
