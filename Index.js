//import { create, Whatsapp } from 'sulla';
const create = require("sulla").create;
const Whatsapp = require("sulla").Whatsapp;
create().then(client => start(client));

function start(client) {
  client.onMessage(message => {
    if (message.body === 'Hi') {
      client.sendText(message.from, '👋 Hello from sulla!');
    }
  });
}
