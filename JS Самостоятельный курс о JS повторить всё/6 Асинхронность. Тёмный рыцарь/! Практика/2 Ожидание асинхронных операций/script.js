const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const promises = [
    delay(65).then(() => 10),
    delay(100).then(() => { throw 'my error'; })
];

function allSettled(promises) {
    // return Promise.resolve([{"status": "resolved", "value": 10}, {"status": "rejected", "reason": "my error"}]);
}