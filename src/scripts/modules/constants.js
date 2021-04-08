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
}