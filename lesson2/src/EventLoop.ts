
// setInterval верхнего уровня, по сути в этот момент стартует EventLoop после первой обработки process.nextTick и микрозадач
let interval = setInterval(() => { console.log('( 5 )'); clearInterval(interval)});

// setImmediate обрабатывается последним после setTimeout, setInterval
setImmediate(() => console.log('( 9 )'));

// setTimeout идет за setInterval
setTimeout(() => console.log('( 6 )'));

// process.nextTick идет в паре с обработчиком микрозадачи Promise
process.nextTick(() => console.log('( 3 )'));

// макрозадача выполняется сразу
console.log('( 1 )');

// обработчик микрозадачи Promise, помещенный в setTimeout,
// обрабатывется там же где и setTimeout, setInterval, тоесть когда крутится EventLoop
let myPromise = () => new Promise((resolve) => setTimeout(() => { console.log('( 7 )'); resolve()}));
// обработчик микрозадачи Promise
let myPromise2 = () => new Promise((resolve) => { console.log('( 2 )'); resolve()} );

// вызов then у Promise, но после setTimeout на верхнем уровне
myPromise().then(() => console.log('( 8 )'));
// вызов then у Promise
myPromise2().then(() => console.log('( 4 )'));
