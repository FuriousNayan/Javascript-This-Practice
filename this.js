// Problem 1
function introduce(name) {
    console.log(this.name);
  }
  this.name = 'Alex'
  introduce("Alex");
 
// Task:
// Replace the name reference inside the function with this.name. 
// Then assign this.name = "Alex" in the global scope before calling the function (ignore the parameter when testing this).

// Q: What is printed? Why does this.name work (or not) in this context?
// A: Alex is printed, it works because this.name is referencing the the global scope and its where it resides. 

// Problem 2

function runArrow(greeting) {
    const arrowFunc = () => {
      console.log(this.greeting);
    };
    arrowFunc();
    
  }
  this.greeting = 'Hello!'
  runArrow("Hello!");

  
//   Task:
//   Replace greeting with this.greeting and assign this.greeting = "Hello!"; before calling the outer function.
  
//   Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore? 
//   A: It no longer refers to the RunArrow function because it refers to the global variable. It refers to the global scope now. 
// Problem 3

const display = {
    message: "This is from the object",
    show: function (param) {
      console.log(this.message);
    }
  };
  display.show("Passed argument");

//   Task:
// Replace param with this.message inside the function.

// Q: What is printed now? Why does this refer to the object? What happened to the argument?
// A: It prints, "This is from the object" because we are referring to the variable inside the function now. 

// Problem 4
  function handleClick(text) {
    this.text = "Clicked!"
    console.log(text);
  }

  document.getElementById("myBtn").onclick = () => {
    handleClick(this.text);
  };

  

// Task:
// Instead of passing "Clicked!", change handleClick() to use this.text, and assign this.text = "Clicked!"; inside the event function. Also try the same with an arrow function.

// Q: What does this.text refer to in each case? Why does the arrow function behave differently?
// A: this.text refers to the global scope. while the arrow function refers to the object. 