const outputDiv = document.getElementById('output');

// Task 1: Simple Context (Modify to use this)
let task1Name = 'Task One';
function logName() {
  outputDiv.textContent += `Task 1: ${task1Name}\n`;
}
document.getElementById('btn1').addEventListener('click', () => {
  logName();
});

// Task 2: Explicit Call (Modify to use this)
let task2Greeting = 'Hello';
let task2Name = 'Task Two';
function logGreetingAndName() {
  outputDiv.textContent += `Task 2: ${task2Greeting}, ${task2Name}\n`;
}
const context2 = { name: 'Context Two' };
document.getElementById('btn2').addEventListener('click', () => {
  logGreetingAndName.call(context2);
});

// Task 3: Explicit Apply (Modify to use this)
let task3Greeting1 = 'Welcome';
let task3Greeting2 = 'Greetings';
let task3Data = 'Task Three Data';
function logMultipleGreetingsAndData() {
  outputDiv.textContent += `Task 3: ${task3Greeting1}, ${task3Greeting2}, ${task3Data}\n`;
}
const context3 = { data: 'Context Three Data' };
document.getElementById('btn3').addEventListener('click', () => {
  logMultipleGreetingsAndData.apply(context3);
});

// Task 4: Explicit Bind (Modify to use this)
let task4Farewell = 'Goodbye';
let task4Message = 'Task Four Message';
function logFarewellAndMessage() {
  outputDiv.textContent += `Task 4: ${task4Farewell}, ${task4Message}\n`;
}
const context4 = { message: 'Context Four Message' };
const boundFunction = logFarewellAndMessage.bind(context4);
document.getElementById('btn4').addEventListener('click', () => {
  boundFunction();
});