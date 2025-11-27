const fs = require('fs');
const EventEmitter = require('events');

const storageFilePath = './storage.json'

const eventEmitter = new EventEmitter();

const readEventCount = () => {
    try {
        if (fs.existsSync(storageFilePath)) {
            const storeFile = fs.readFileSync(storageFilePath, "utf-8")
            console.log('storeFile', storeFile)
            return JSON.parse(storeFile)
        }else{
             console.error('Error reading file:');
        }
    } catch (error) {
        console.error('Error reading file:', error);
    }
    return { greetCount: 0, loginCount: 0 };
}

const writeEventCount = (data = {
    greetCount: 0, loginCount: 0
}) => {
    try {
        fs.writeFileSync(storageFilePath, JSON.stringify(data))
    } catch (error) {
        console.error('Error writing file:', err);
    }

}

const eventCount = readEventCount()

// Event listener for 'greet' event
eventEmitter.on('greet', (name) => {
    eventCount["greetCount"]++
    console.log(`Hello, ${name}!`);
});

eventEmitter.emit('greet', 'Satish')
eventEmitter.emit('greet', 'Rohit')

// Event listener for 'greet' event
eventEmitter.on('login', (name) => {
    eventCount["loginCount"]++
    console.log(`Hello Welcome, ${name}!`);
});

writeEventCount(eventCount)

console.log('eventCount', eventCount)