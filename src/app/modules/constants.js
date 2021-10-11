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

  static forms = {
    contactFormHost: 'http://localhost:7250/',
    requests: {
      contactForm: 'contact-form/'
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
    fitting1x: '1x e14 fitting',
    fitting5x: '5x e14 fitting',
    fitting6x: '6x e14 fitting',
    fitting7x: '7x e14 fitting',
    fitting8x: '8x e14 fitting',
    moreThan8x: 'more than 8x',
    otherFittings: 'other fittings'
  }

  static googleSrc = {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.7948409665373!2d18.551015214781184!3d-33.94640443052128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b3bcce3cfa5%3A0x6c7dae69f66ecf7!2s42%20Kameeldoring%20Street%2C%20Bonteheuwel%2C%20Cape%20Town%2C%207764!5e0!3m2!1sen!2sza!4v1591617549743!5m2!1sen!2sza'
  }
}