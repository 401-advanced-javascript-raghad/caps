'use strict';

const emitter = require('./events.js');
const faker = require('faker');
const handler = require('./caps.js').vendorDelivered;


emitter.on('delivered', handler);

setInterval(() => {
  let customerObj = {
    storeName: 'RAGHAD Shop',
    orderID: faker.random.uuid(),
    customerName: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.streetAddress(), 
  };

  emitter.emit('pickup', customerObj);
}, 5000);
