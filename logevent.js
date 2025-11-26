const EventEmitter = require('events');

class Eventlogger extends EventEmitter {

    logEventMessage(message) {
        // Log the message
        console.log('Logging message:', message);

        // Emit an event after logging the message
        this.emit('eventMessageLogged', { id: 1, message: message });
    };
}



module.exports = Eventlogger;