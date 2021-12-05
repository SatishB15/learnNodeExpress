const EventEmitter = require('events');
const myEmitter = new EventEmitter();


const callbackA = () => {
    console.log("Event Started");
};
const callbackB = () => {
    setTimeout(() => console.log('Event is Going..!'), 3000)
}
const callbackC = () => {
    setTimeout(() => console.log('Event is Ended..!'), 5000)
}

myEmitter.on('start', callbackA);
myEmitter.on('middle', callbackB);
myEmitter.on('end', callbackC);

myEmitter.emit('start');
myEmitter.emit('middle');
myEmitter.emit('end');
