'use strict';

const vendorDelivered = (payload) => {
  console.log(
    'VENDOR says: "Thank you for delivering order',
    payload.orderID, '"',
  );
};

const driverPickup = (payload) => {
  console.log('DRIVER picked up order', payload.orderID);
};

const driverDelivered = (payload) => {
  console.log('DRIVER delivered order', payload.orderID);
};

const pickupOrder = (payload) => {
  console.log('EVENT pickup');
  console.log(' Time:', new Date());
  console.log(' store:', payload.storeName);
  console.log(' orderID:', payload.orderID);
  console.log(' customer:', payload.customerName);
  console.log(' address:', payload.address);
};

const inTransitOrder = (payload) => {
  console.log('EVENT in-transit', payload.orderID);
};

const deliveredOrder = (payload) => {
  console.log('EVENT delivered', payload.orderID);
};

module.exports = {
  vendorDelivered,
  driverPickup,
  driverDelivered,
  pickupOrder,
  inTransitOrder,
  deliveredOrder,
};