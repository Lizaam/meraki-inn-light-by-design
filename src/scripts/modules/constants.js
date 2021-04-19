export default class CONSTANTS {
  static storageKeys = {
    all: 'all',
    lamps: 'lamp',
    chandelier: 'chandelier'
  }

  static api = {
    host: 'https://meraki-products.herokuapp.com/',
    requests: {
      getAll: 'getAll',
      getLamps: 'get/lamp',
      getChandeliers: 'get/chandelier'
    }
  }

  static searchTerms = {
    all: 'all',
    chandelier: 'chandelier',
    lamp: 'lamp',
    candle: 'candle',
    beaded: 'beaded',
    crystals: 'crystals',
    retro: 'retro',
    availableForBulk: 'available for bulk',
    notAvailableForBulk: 'not available for bulk',
    fitting5x: '5x e14 fitting',
    fitting6x: '6x e14 fitting',
    fitting7x: '7x e14 fitting',
    fitting8x: '8x e14 fitting',
    moreThan8x: 'more than 8x',
  }

  static sideNavigationFiltering = [
    {
      header: 'Type',
      inputType: 'radio',
      elements: [ 'all', 'chandelier', 'lamp', 'candle' ],
    },
    {
      header: 'Price',
      inputType: 'range',
      elements: [ 'range' ],
    },
    {
      header: 'Categories',
      inputType: 'checkbox',
      elements: [ 'beaded', 'crystals' ],
    },
    {
      header: 'Unit Availability',
      inputType: 'checkbox',
      elements: [ 'available for bulk', 'not available for bulk' ],
    },
    {
      header: 'Fixture Fitting',
      inputType: 'checkbox',
      elements: [ '5x E14 fitting', '6x E14 fitting', '7x E14 fitting', '8x E14 fitting', 'more than 8x' ],
    }
  ]
}