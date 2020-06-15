'use strict';

const net = require('net');
const server = net.createServer();
// const port = process.env.PORT;

server.listen(3000, () => {
  console.log('RAGHAD server up and running on 3000');
});

let socketPool = {};



const doWork = (payload) => {
  let parsed = JSON.parse(payload.toString());

  if (parsed.event === 'pickup') {
    console.log('pickup');
    console.log('Time:', new Date());
    console.log('Store:', parsed.order.storeName);
    console.log('OrderID:', parsed.order.orderID);
    console.log('Customer:', parsed.order.customerName);
    console.log('Address:', parsed.order.address);
  }

  if (parsed.event === 'in-transit')
    console.log(`in-transit order ${parsed.order.orderID}`);

  if (parsed.event === 'delivered')
    console.log(`delivered order ${parsed.order.orderID}`);

  broadcast(parsed);

};

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  console.log(`client with ID : ${id} is connected!!! `);
  socketPool[id] = socket;
  socket.on('data', doWork);
});
function broadcast(msg) {
  let payload = JSON.stringify(msg);
  for (let socket in socketPool) {
    socketPool[socket].write(payload);
  }
}
