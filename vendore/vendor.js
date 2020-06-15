'use strict';

const net = require('net');
const faker = require('faker');
const socket = new net.Socket();

socket.connect({ port: 3000, host: 'localhost' }, () => {
  console.log('connected to server');
});

socket.on('data', (payload) => {
  let parsed = JSON.parse(payload.toString());

  if (parsed.event === 'delivered') {
    console.log(`Thank you for delivering order ${parsed.order.orderID}`);
  }
});

setInterval(() => {
  let order = {
    storeName: faker.company.companyName(),
    orderID: faker.random.uuid(),
    customerName: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.streetAddress(),
  };

  // similar to saying socket.emit('data', {})
  socket.write(JSON.stringify({ event: 'pickup', order: order }));
}, 5000);