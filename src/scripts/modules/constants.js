export default class CONSTANTS {
  static storageKeys = {
    all: 'all'
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
}