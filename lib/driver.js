'use strict';

const emitter = require('./events.js');
const pickup = require('./caps.js').driverPickup;
const delivery = require('./caps.js').driverDelivered;

const goOutForDelivery = (payload) => {
  emitter.emit('in-transit', payload);
  setTimeout(() => {
    emitter.emit('delivered', payload);
  }, 1000);
};

emitter.on('pickup', pickup);
emitter.on('pickup', goOutForDelivery);
emitter.on('delivered', delivery);
