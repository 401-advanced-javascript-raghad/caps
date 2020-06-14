'use strict';

const emitter = require('./lib/events.js');
const pickup = require('./lib/caps.js').pickupOrder;
const inTransit = require('./lib/caps.js').inTransitOrder;
const delivered = require('./lib/caps.js').deliveredOrder;


emitter.on('pickup', pickup);

require('./lib/driver.js');
require('./lib/vendor.js');

emitter.on('in-transit', inTransit);
emitter.on('delivered', delivered);

