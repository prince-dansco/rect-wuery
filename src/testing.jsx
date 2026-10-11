import { useState } from "react";

const courseData = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    color: "#F59E0B",
    accent: "#FDE68A",
    icon: "⚡",
    weeks: [
      {
        week: 1,
        title: "Basics of Programming",
        lessons: [
          {
            title: "Introduction to Programming",
            description: "Understand what programming is and why JavaScript is one of the world's most popular languages. Explore how browsers execute JS and what makes it unique as a language that runs both in the browser and on servers.",
            video: { label: "Programming Fundamentals", url: "https://www.youtube.com/watch?v=zOjov-2OZ0E" }
          },
          {
            title: "Setting Up Your Environment",
            description: "Install VS Code, configure it with essential extensions (Prettier, ESLint, Live Server), and learn to use browser DevTools. You'll write your first JavaScript line in both the browser console and a .js file.",
            video: { label: "VS Code Setup for JS", url: "https://www.youtube.com/watch?v=VqgUkExPvLY" }
          },
          {
            title: "JavaScript Syntax",
            description: "Learn the foundational rules of JavaScript: statements, semicolons, comments (// and /* */), case sensitivity, and how the interpreter reads your code top-to-bottom.",
            video: { label: "JS Syntax Crash Course", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c" }
          },
          {
            title: "Variables and Data Types",
            description: "Master var, let, and const. Explore JavaScript's primitive types: string, number, boolean, null, undefined, and symbol. Understand dynamic typing and use typeof to inspect values.",
            video: { label: "Variables & Data Types", url: "https://www.youtube.com/watch?v=9emXNzqCKyg" }
          },
          {
            title: "Arithmetic Operations",
            description: "Use +, -, *, /, %, and ** operators. Understand operator precedence, increment/decrement (++ / --), and compound assignment operators (+=, -=, etc.).",
            video: { label: "JS Operators", url: "https://www.youtube.com/watch?v=ULNJSTSJc7s" }
          },
          {
            title: "Template Literals",
            description: "Replace string concatenation with backtick template literals. Embed expressions using ${}, write multi-line strings cleanly, and understand tagged templates as a bonus concept.",
            video: { label: "Template Literals", url: "https://www.youtube.com/watch?v=DG4obitDvUA" }
          }
        ],
        classwork: [
          "Open browser DevTools console — try 5 arithmetic expressions",
          "Declare variables of each data type and log them with typeof",
          "Build a short bio string using template literals"
        ],
        assignment: {
          title: "Personal Profile Card (Console)",
          description: "Create a .js file that declares variables for your name, age, city, hobby, and a fun fact. Use template literals to print a formatted profile card to the console. Include at least 3 arithmetic calculations (e.g., birth year, days lived).",
          deliverable: "A .js file + screenshot of console output"
        }
      },
      {
        week: 2,
        title: "Control Flow",
        lessons: [
          {
            title: "Comparison & Logical Operators",
            description: "Deep-dive into ==, ===, !=, !==, >, <, >=, <=. Understand why strict equality (===) matters. Use &&, ||, and ! to build compound conditions. Learn the short-circuit evaluation trick.",
            video: { label: "Comparison & Logical Operators", url: "https://www.youtube.com/watch?v=v9B5bNZ6A54" }
          },
          {
            title: "Conditional Statements",
            description: "Control your program's path using if, else if, else, the ternary operator, and switch statements. Learn when each pattern is most appropriate and how to avoid deeply nested ifs.",
            video: { label: "If/Else & Switch", url: "https://www.youtube.com/watch?v=N4V0FZASK60" }
          },
          {
            title: "Loops",
            description: "Repeat actions efficiently with for, while, do...while, for...of, and for...in loops. Master break and continue. Understand infinite loops and how to avoid them.",
            video: { label: "Loops in JavaScript", url: "https://www.youtube.com/watch?v=s9wW2PpJsmQ" }
          }
        ],
        classwork: [
          "Write an if/else that checks if a number is even, odd, or zero",
          "Use a for loop to print the multiplication table of 7",
          "Create a switch statement for a simple menu system"
        ],
        assignment: {
          title: "FizzBuzz + Number Guessing Game",
          description: "Part A: Classic FizzBuzz — loop 1–100, print 'Fizz' for multiples of 3, 'Buzz' for 5, 'FizzBuzz' for both. Part B: Simulate a number guessing game using a hardcoded secret number and a loop that gives 'Too high', 'Too low', 'Correct!' feedback over several guesses.",
          deliverable: "A .js file with both parts clearly commented"
        }
      }
    ]
  },
  {
    id: 2,
    title: "Functions and Scope",
    color: "#8B5CF6",
    accent: "#DDD6FE",
    icon: "🔧",
    weeks: [
      {
        week: 3,
        title: "Functions & Scope",
        lessons: [
          {
            title: "Functions and Calls",
            description: "Understand why functions are the building blocks of JavaScript. Learn function declarations, how to invoke/call them, and the difference between defining and executing a function.",
            video: { label: "Functions Explained", url: "https://www.youtube.com/watch?v=gigtS_5KOqo" }
          },
          {
            title: "Parameters & Return Values",
            description: "Pass data into functions via parameters and get data back with return. Understand default return value (undefined), multiple returns, and how to use returned values in expressions.",
            video: { label: "Parameters & Return", url: "https://www.youtube.com/watch?v=Y6AHXoBMkLg" }
          },
          {
            title: "Expressions vs Declarations",
            description: "Distinguish between function declarations (hoisted) and function expressions (not hoisted). Understand why this matters for code organization and potential bugs.",
            video: { label: "Declarations vs Expressions", url: "https://www.youtube.com/watch?v=VAFkqRyRHKY" }
          },
          {
            title: "Arrow Functions",
            description: "Write concise functions using ES6 arrow syntax (=>). Learn when you can omit brackets and the return keyword. Understand the key difference: arrow functions don't bind their own 'this'.",
            video: { label: "Arrow Functions", url: "https://www.youtube.com/watch?v=h33Srr5J9nY" }
          },
          {
            title: "Scope: Global, Local & Closures",
            description: "Understand lexical scope, the scope chain, and variable shadowing. Learn how closures let inner functions remember variables from their outer scope long after that scope has finished executing.",
            video: { label: "Scope & Closures", url: "https://www.youtube.com/watch?v=3a0I8ICR1Vg" }
          },
          {
            title: "Practical Closure Examples",
            description: "Build real-world closure patterns: counter factories, private variables, memoization, and the module pattern. Understand why closures are one of JavaScript's most powerful features.",
            video: { label: "Closures in Practice", url: "https://www.youtube.com/watch?v=vKJpN5FAeF4" }
          }
        ],
        classwork: [
          "Write a function that returns the area of a rectangle",
          "Rewrite 3 regular functions as arrow functions",
          "Create a counter using closures (increment, decrement, reset)"
        ],
        assignment: {
          title: "Function Utility Library",
          description: "Build a small utility library with at least 6 functions: (1) celsius-to-fahrenheit converter, (2) palindrome checker, (3) word counter, (4) a closure-based score tracker with add/subtract/reset, (5) a greeting generator using default parameters, (6) a simple calculator using arrow functions.",
          deliverable: "A well-commented .js file demonstrating all 6 utilities"
        }
      }
    ]
  },
  {
    id: 3,
    title: "Arrays and Objects",
    color: "#10B981",
    accent: "#A7F3D0",
    icon: "📦",
    weeks: [
      {
        week: 4,
        title: "Arrays",
        lessons: [
          {
            title: "Array Creation & Indexing",
            description: "Create arrays with literals and the Array constructor. Access elements by index (0-based), use negative-style access with .at(), find array length, and understand that arrays are objects under the hood.",
            video: { label: "Arrays Intro", url: "https://www.youtube.com/watch?v=7W4pQQ20nJg" }
          },
          {
            title: "Common Array Methods",
            description: "Master the essential toolkit: push/pop (end), shift/unshift (start), slice (non-destructive copy), splice (destructive edit), indexOf, includes, join, and reverse.",
            video: { label: "Array Methods", url: "https://www.youtube.com/watch?v=R8rmfD9Y5-c" }
          },
          {
            title: "Iterating Through Arrays",
            description: "Use forEach, map, filter, reduce, find, findIndex, some, and every. Understand which methods return new arrays vs. values vs. undefined. Master chaining for expressive data pipelines.",
            video: { label: "Array Iteration Methods", url: "https://www.youtube.com/watch?v=Urwzk6ILvPQ" }
          },
          {
            title: "Array Destructuring",
            description: "Unpack array values into variables with clean destructuring syntax. Use rest elements, skip positions, set defaults, and swap variables without a temp variable.",
            video: { label: "Array Destructuring", url: "https://www.youtube.com/watch?v=NIq3qLaHCIs" }
          }
        ],
        classwork: [
          "Create an array of 5 fruits and practice push, pop, shift, unshift",
          "Use map to double all numbers in [1,2,3,4,5]",
          "Use filter to get only even numbers from an array"
        ],
        assignment: {
          title: "Student Grade Analyzer",
          description: "Given an array of student objects {name, grade}, use array methods to: (1) filter students who passed (≥50), (2) map names of top scorers (≥80), (3) calculate the class average with reduce, (4) find the highest scorer with find/reduce, (5) sort students by grade descending. Display results with console.log.",
          deliverable: ".js file with all 5 operations clearly labeled"
        }
      },
      {
        week: 5,
        title: "Objects",
        lessons: [
          {
            title: "Object Creation & Properties",
            description: "Create objects with literals, constructors, and Object.create(). Understand key-value pairs, valid property names, and the difference between properties (data) and methods (functions).",
            video: { label: "Objects in JavaScript", url: "https://www.youtube.com/watch?v=PFmuCDHHpwk" }
          },
          {
            title: "Accessing & Modifying Properties",
            description: "Use dot notation and bracket notation. Add, update, and delete properties. Use Object.keys(), Object.values(), Object.entries(), and hasOwnProperty() for inspection.",
            video: { label: "Object Properties", url: "https://www.youtube.com/watch?v=rLPwCAqyCAE" }
          },
          {
            title: "Object Methods & 'this'",
            description: "Define methods inside objects and use the 'this' keyword to reference the object's own properties. Understand how 'this' binding works (and can go wrong) in different contexts.",
            video: { label: "Object Methods & This", url: "https://www.youtube.com/watch?v=gvicrj31JOM" }
          },
          {
            title: "Object Destructuring",
            description: "Extract properties into variables cleanly. Rename variables during destructuring, set default values, and use nested destructuring for complex objects. Combine with function parameters.",
            video: { label: "Object Destructuring", url: "https://www.youtube.com/watch?v=NIq3qLaHCIs&t=300s" }
          },
          {
            title: "JSON",
            description: "Understand JSON as a data interchange format. Use JSON.stringify() to convert objects to strings and JSON.parse() to convert back. Handle nested structures and learn common gotchas (no functions, no undefined).",
            video: { label: "JSON Explained", url: "https://www.youtube.com/watch?v=iiADhChRriM" }
          }
        ],
        classwork: [
          "Create a 'book' object with title, author, year, and a getSummary() method",
          "Destructure a user object and rename properties",
          "Convert an object to JSON and back using stringify/parse"
        ],
        assignment: {
          title: "Library Catalog System",
          description: "Build a mini library catalog using an array of book objects. Each book: {id, title, author, year, available}. Implement functions to: (1) add a book, (2) check out a book (set available: false), (3) return a book, (4) search by author, (5) list all available books. Serialize/deserialize the catalog to JSON.",
          deliverable: "A complete .js file with all functions and a demo run"
        }
      }
    ]
  },
  {
    id: 4,
    title: "DOM Manipulation",
    color: "#EF4444",
    accent: "#FECACA",
    icon: "🖥️",
    weeks: [
      {
        week: 6,
        title: "The DOM & Events",
        lessons: [
          {
            title: "Introduction to the DOM",
            description: "Understand the Document Object Model as a tree of nodes representing your HTML. Learn how JavaScript can read and modify this live tree, and how browsers build it when parsing HTML.",
            video: { label: "DOM Introduction", url: "https://www.youtube.com/watch?v=0ik6X4DJKCc" }
          },
          {
            title: "Selecting Elements",
            description: "Master all selector methods: getElementById, getElementsByClassName, getElementsByTagName, querySelector (returns first), and querySelectorAll (returns NodeList). Understand the difference between live HTMLCollections and static NodeLists.",
            video: { label: "DOM Selectors", url: "https://www.youtube.com/watch?v=Y-Lr6qlRn4c" }
          },
          {
            title: "Modifying Content & Attributes",
            description: "Change text with textContent and innerHTML (and why innerHTML needs caution). Set/get attributes with setAttribute/getAttribute. Modify CSS via element.style and classList (add, remove, toggle, contains).",
            video: { label: "Modifying the DOM", url: "https://www.youtube.com/watch?v=eaLKqoB9Fu0" }
          },
          {
            title: "Creating & Removing Elements",
            description: "Dynamically create elements with createElement, add content, and insert them with appendChild, insertBefore, and insertAdjacentElement. Remove elements with remove() and removeChild().",
            video: { label: "Creating DOM Elements", url: "https://www.youtube.com/watch?v=Ns1LHTnfENA" }
          },
          {
            title: "Event Listeners",
            description: "Use addEventListener to respond to clicks, key presses, form submissions, mouse events, and more. Understand the Event object, preventDefault(), stopPropagation(), and event types.",
            video: { label: "Event Listeners", url: "https://www.youtube.com/watch?v=XF1_MlZ5l6M" }
          },
          {
            title: "Event Delegation",
            description: "Instead of adding listeners to every child element, attach one listener to a parent and use event.target to identify which child triggered it. Essential for dynamic content and performance.",
            video: { label: "Event Delegation", url: "https://www.youtube.com/watch?v=3KJI1WZGDrg" }
          }
        ],
        classwork: [
          "Select elements 5 different ways and log them to the console",
          "Build a button that changes its own text color on click",
          "Dynamically add list items to a <ul> using createElement"
        ],
        assignment: {
          title: "Interactive To-Do List",
          description: "Build a complete to-do list in HTML/JS: (1) input field + Add button creates new task items, (2) clicking a task toggles it as complete (strikethrough + color change), (3) each task has a Delete button, (4) a counter shows remaining tasks, (5) use event delegation for task interactions. No frameworks — pure DOM manipulation.",
          deliverable: "index.html + style.css + app.js (or single HTML file with embedded JS/CSS)"
        }
      }
    ]
  },
  {
    id: 5,
    title: "Asynchronous JavaScript",
    color: "#3B82F6",
    accent: "#BFDBFE",
    icon: "⏳",
    weeks: [
      {
        week: 7,
        title: "Async Programming",
        lessons: [
          {
            title: "Sync vs Async Programming",
            description: "Understand JavaScript's single-threaded, non-blocking event loop architecture. Learn why async matters for I/O operations and how the call stack, Web APIs, callback queue, and event loop interact.",
            video: { label: "Event Loop Explained", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ" }
          },
          {
            title: "Callbacks",
            description: "Pass functions as arguments to handle async results. Understand callback-based patterns in setTimeout, setInterval, and older Node.js APIs. Experience 'callback hell' and why we needed a better solution.",
            video: { label: "Callbacks in JS", url: "https://www.youtube.com/watch?v=QRq2zMHlBz4" }
          },
          {
            title: "Promises",
            description: "Create and consume Promises. Understand the three states (pending, fulfilled, rejected). Chain .then() and .catch() handlers. Use Promise.all(), Promise.race(), and Promise.allSettled() for multiple async operations.",
            video: { label: "JavaScript Promises", url: "https://www.youtube.com/watch?v=DHvZLI7Db8E" }
          },
          {
            title: "Async / Await",
            description: "Write async code that reads like synchronous code using the async/await syntax. Understand that async functions always return Promises. Use await to pause execution until a Promise resolves.",
            video: { label: "Async/Await", url: "https://www.youtube.com/watch?v=V_Kr9OSfDeU" }
          },
          {
            title: "Error Handling in Async Code",
            description: "Catch errors in Promises using .catch(). Use try/catch blocks with async/await. Handle network errors, JSON parse errors, and custom error types gracefully without crashing your app.",
            video: { label: "Async Error Handling", url: "https://www.youtube.com/watch?v=ITogH7lJTyE" }
          }
        ],
        classwork: [
          "Use setTimeout to simulate a 2-second loading delay",
          "Create a Promise that resolves with a random number after 1 second",
          "Rewrite a Promise chain using async/await"
        ],
        assignment: {
          title: "Async Data Pipeline",
          description: "Build three versions of the same function that fetches mock user data (use a simulated delay with setTimeout/Promise): (1) callback version, (2) Promise chain version, (3) async/await version with try/catch. All three should handle success AND failure cases. Include a comment comparing the readability of each approach.",
          deliverable: ".js file with all three implementations and test calls"
        }
      }
    ]
  },
  {
    id: 6,
    title: "Advanced Topics",
    color: "#EC4899",
    accent: "#FBCFE8",
    icon: "🚀",
    weeks: [
      {
        week: 8,
        title: "ES6+ Features",
        lessons: [
          {
            title: "Let, Const & Block Scope",
            description: "Understand why var is largely obsolete and how let/const enforce block scoping. Learn temporal dead zones, const with objects/arrays (reference vs. value immutability), and best practices.",
            video: { label: "Let vs Const vs Var", url: "https://www.youtube.com/watch?v=9WIJQDvt4Us" }
          },
          {
            title: "Advanced Template Literals",
            description: "Go beyond basic interpolation: tagged templates, raw strings with String.raw, creating HTML builders, and building domain-specific mini-languages with template literal tags.",
            video: { label: "Advanced Template Literals", url: "https://www.youtube.com/watch?v=DG4obitDvUA" }
          },
          {
            title: "Spread & Rest Operators",
            description: "Use ... as spread to expand arrays/objects into arguments or new arrays. Use it as rest to collect remaining arguments into an array. Clone arrays/objects and merge them without mutation.",
            video: { label: "Spread & Rest", url: "https://www.youtube.com/watch?v=iLx4ma8ZqvQ" }
          },
          {
            title: "Default Parameters",
            description: "Set fallback values for function parameters so they're never undefined. Combine with destructuring for flexible, self-documenting function signatures.",
            video: { label: "Default Parameters", url: "https://www.youtube.com/watch?v=y2DaqGEMBKo" }
          },
          {
            title: "Classes & Inheritance",
            description: "Use ES6 class syntax to define blueprints with constructors, instance methods, and static methods. Extend classes with extends and super. Understand that classes are syntactic sugar over prototype-based inheritance.",
            video: { label: "JS Classes", url: "https://www.youtube.com/watch?v=RBLIm5LMrmc" }
          },
          {
            title: "Modules (import/export)",
            description: "Split code into reusable files using ES Modules. Named exports vs default exports. Import specific pieces or entire modules. Understand module scope and how bundlers like Vite work with modules.",
            video: { label: "JS Modules", url: "https://www.youtube.com/watch?v=cRHQNNkYi58" }
          }
        ],
        classwork: [
          "Merge two arrays using spread without mutation",
          "Write a class 'Animal' and extend it to 'Dog' with a bark() method",
          "Split a utility file into modules and import them"
        ],
        assignment: {
          title: "OOP Shape Calculator",
          description: "Create a class hierarchy: Shape (base) → Circle, Rectangle, Triangle (subclasses). Each shape should have: constructor with dimensions, area() method, perimeter() method, toString() for display. Use static methods for unit conversion. Export all classes as named exports from a shapes.js module and import them in main.js.",
          deliverable: "shapes.js + main.js demonstrating all classes"
        }
      },
      {
        week: 9,
        title: "Working with APIs",
        lessons: [
          {
            title: "What is an API?",
            description: "Understand APIs as contracts between software. Learn about REST, endpoints, HTTP methods, status codes (200, 404, 500), and headers. Understand base URLs, query params, and path params.",
            video: { label: "What is an API?", url: "https://www.youtube.com/watch?v=s7wmiS2mSXY" }
          },
          {
            title: "The Fetch API",
            description: "Use the browser's built-in fetch() function to make HTTP requests. Understand that fetch returns a Promise, why you need two awaits (one for network, one for JSON parsing), and the Response object.",
            video: { label: "Fetch API", url: "https://www.youtube.com/watch?v=drK3gtB1consistent" }
          },
          {
            title: "GET & POST Requests",
            description: "Make GET requests to retrieve data and POST requests to send data. Set headers (Content-Type, Authorization), construct request bodies, and handle different response types.",
            video: { label: "HTTP GET & POST with Fetch", url: "https://www.youtube.com/watch?v=2SN8n-DK25s" }
          },
          {
            title: "Parsing JSON Responses",
            description: "Use response.json() to parse API responses. Handle nested data, arrays of objects, and paginated results. Transform raw API data into the shape your UI needs.",
            video: { label: "Parsing JSON from APIs", url: "https://www.youtube.com/watch?v=iiADhChRriM" }
          },
          {
            title: "Working with Third-Party APIs",
            description: "Use real public APIs: OpenWeatherMap, REST Countries, or PokeAPI. Handle API keys safely, read API documentation, and build a small UI around fetched data.",
            video: { label: "Real World API Project", url: "https://www.youtube.com/watch?v=dtKciwk_si4" }
          }
        ],
        classwork: [
          "Fetch data from https://jsonplaceholder.typicode.com/users and log names",
          "Display a list of 10 posts from the JSONPlaceholder API in HTML",
          "Make a POST request and log the response"
        ],
        assignment: {
          title: "Country Explorer App",
          description: "Build a Country Explorer using the REST Countries API (https://restcountries.com). Features: (1) search by country name, (2) display flag, capital, population, region, and languages, (3) show a list of neighboring countries, (4) loading state while fetching, (5) friendly error message if country not found. Use async/await and display results in a clean HTML interface.",
          deliverable: "Single HTML file with embedded JS and CSS"
        }
      }
    ]
  },
  {
    id: 7,
    title: "Final Project & Best Practices",
    color: "#14B8A6",
    accent: "#99F6E4",
    icon: "🏆",
    weeks: [
      {
        week: 10,
        title: "JavaScript Best Practices",
        lessons: [
          {
            title: "Code Organization & Readability",
            description: "Learn naming conventions (camelCase, SCREAMING_SNAKE_CASE for constants), the single-responsibility principle, DRY (Don't Repeat Yourself), and how to structure a JS project into logical files.",
            video: { label: "Clean Code in JS", url: "https://www.youtube.com/watch?v=BVc7dGmDMPs" }
          },
          {
            title: "Debugging Techniques",
            description: "Go beyond console.log: use debugger statements, DevTools breakpoints, watch expressions, and the call stack panel. Master console.table, console.group, and console.time for smarter debugging.",
            video: { label: "Debugging JavaScript", url: "https://www.youtube.com/watch?v=H0XScE08hy8" }
          },
          {
            title: "Browser Developer Tools",
            description: "Deep dive into Chrome/Firefox DevTools: Network tab to inspect API calls, Performance tab for flame graphs, Memory tab for leak detection, and the Application tab for storage inspection.",
            video: { label: "DevTools Deep Dive", url: "https://www.youtube.com/watch?v=TcTSqhpm80Y" }
          },
          {
            title: "Common Pitfalls & How to Avoid Them",
            description: "Learn the classic JS gotchas: type coercion, falsy values, == vs ===, 'this' binding issues, mutation bugs, callback hell, and floating-point arithmetic. Prevent them with strict mode and linting.",
            video: { label: "JS Common Mistakes", url: "https://www.youtube.com/watch?v=Bv_5Zv5c-Ts" }
          },
          {
            title: "Performance Optimization Basics",
            description: "Learn DOM batching, debounce vs throttle for event handlers, lazy loading, avoiding layout thrashing, and using requestAnimationFrame for smooth animations. Measure with DevTools Performance panel.",
            video: { label: "JS Performance", url: "https://www.youtube.com/watch?v=R8KkYbPtONo" }
          }
        ],
        classwork: [
          "Use DevTools to set a breakpoint and step through code",
          "Identify and fix 3 common pitfalls in a provided buggy code sample",
          "Implement a debounce function and apply it to a search input"
        ],
        assignment: {
          title: "Code Audit & Refactor",
          description: "Take your Week 6 To-Do list project and perform a full code audit: (1) apply ESLint and fix all warnings, (2) refactor repeated code into reusable functions, (3) add meaningful comments, (4) add a debounce to any search/filter features, (5) document at least 3 things you improved and why in a README.md.",
          deliverable: "Refactored project files + README.md"
        }
      },
      {
        week: 11,
        title: "Final Project",
        lessons: [
          {
            title: "Project Planning & Setup",
            description: "Learn to break down a project into features, user stories, and tasks. Create a simple project plan, set up your file structure, initialize with Git, and write a README before coding a single line.",
            video: { label: "Project Planning for Developers", url: "https://www.youtube.com/watch?v=HKoXyXZ0h2Q" }
          },
          {
            title: "Building a Complete App",
            description: "Bring all concepts together: DOM manipulation, API integration, async/await, OOP, and modular code. Focus on feature-by-feature development with testing at each step.",
            video: { label: "Build a JS App from Scratch", url: "https://www.youtube.com/watch?v=3PHXvlpOkf4" }
          },
          {
            title: "Integration & Testing",
            description: "Manually test all user flows, edge cases, and error states. Add input validation. Ensure the app works on mobile screens (responsive CSS). Learn basic unit testing concepts.",
            video: { label: "Testing JavaScript", url: "https://www.youtube.com/watch?v=7r4xVDI2vho" }
          },
          {
            title: "Deployment Basics",
            description: "Deploy your app for free with GitHub Pages or Netlify. Understand the deployment pipeline: push to Git → auto-build → live URL. Share your project with the world.",
            video: { label: "Deploy JS App with Netlify", url: "https://www.youtube.com/watch?v=sGBdp9r2GSg" }
          },
          {
            title: "Next Steps in Your JS Journey",
            description: "Explore what comes after: React, Node.js, TypeScript, testing frameworks (Jest/Vitest), and package management with npm. Understand the modern JS ecosystem and how to keep learning effectively.",
            video: { label: "What to Learn After JS Basics", url: "https://www.youtube.com/watch?v=H91aqUHn8sE" }
          }
        ],
        classwork: [
          "Write user stories for your final project idea",
          "Set up a GitHub repo and make your first commit",
          "Create wireframes (hand-drawn or Figma) for your app UI"
        ],
        assignment: {
          title: "⭐ Capstone: Full JavaScript Application",
          description: "Build a complete, deployed JavaScript application of your choice. Requirements: (1) fetches data from at least one real API, (2) has full CRUD-like interactions (add, display, edit/filter, delete), (3) uses at least one class or module pattern, (4) handles loading and error states gracefully, (5) is responsive and visually polished, (6) is deployed live (GitHub Pages/Netlify), (7) includes a README with description, setup instructions, and feature list. Suggested projects: Movie Watchlist App, Weather Dashboard, Quiz App, Expense Tracker, Recipe Finder.",
          deliverable: "Live deployed URL + GitHub repo link + README"
        }
      }
    ]
  }
];

export default function JSCourse() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeTab, setActiveTab] = useState("lessons");
  const [completedLessons, setCompletedLessons] = useState({});

  const module = courseData[activeModule];
  const week = module.weeks[activeWeek];

  const totalLessons = courseData.reduce((acc, m) => acc + m.weeks.reduce((a, w) => a + w.lessons.length, 0), 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  const toggleLesson = (key) => {
    setCompletedLessons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{
      fontFamily: "'Sora', 'Segoe UI', sans-serif",
      background: "#0F0F13",
      minHeight: "100vh",
      color: "#E2E8F0",
      display: "flex",
      flexDirection: "column"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1a1a22; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        .lesson-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
        .lesson-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .module-btn:hover { filter: brightness(1.15); }
        .module-btn { transition: filter 0.15s ease, transform 0.15s ease; }
        .tab-btn:hover { opacity: 1 !important; }
        .check-circle:hover { transform: scale(1.1); }
        .check-circle { transition: transform 0.15s ease; }
        a { color: inherit; text-decoration: none; }
        a:hover { opacity: 0.85; }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        padding: "28px 32px 24px",
        borderBottom: "1px solid #1e293b",
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "blur(20px)"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: "linear-gradient(135deg, #F59E0B, #EF4444)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, fontWeight: 800
            }}>JS</div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 20, letterSpacing: -0.5 }}>JavaScript Mastery</div>
              <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>7 Modules · 11 Weeks · Full Curriculum</div>
            </div>
          </div>
          {/* Progress */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 13, color: "#94A3B8" }}>Progress</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 18 }}>{progressPct}%</div>
            </div>
            <div style={{ width: 100, height: 8, background: "#1e293b", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progressPct}%`, background: "linear-gradient(90deg, #F59E0B, #EF4444)", borderRadius: 8, transition: "width 0.4s ease" }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, maxWidth: 1200, margin: "0 auto", width: "100%", gap: 0 }}>
        {/* Sidebar */}
        <div style={{
          width: 280, minWidth: 280,
          background: "#0d0d14",
          borderRight: "1px solid #1e293b",
          padding: "20px 0",
          overflowY: "auto",
          maxHeight: "calc(100vh - 92px)",
          position: "sticky",
          top: 92
        }}>
          {courseData.map((mod, mi) => (
            <div key={mi}>
              <button
                className="module-btn"
                onClick={() => { setActiveModule(mi); setActiveWeek(0); setActiveTab("lessons"); }}
                style={{
                  width: "100%", textAlign: "left",
                  padding: "12px 20px",
                  background: activeModule === mi ? `${mod.color}18` : "transparent",
                  border: "none", borderLeft: activeModule === mi ? `3px solid ${mod.color}` : "3px solid transparent",
                  cursor: "pointer", color: activeModule === mi ? "#fff" : "#64748B",
                  display: "flex", alignItems: "center", gap: 10
                }}
              >
                <span style={{ fontSize: 18 }}>{mod.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: mod.color, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Module {mod.id}</div>
                  <div style={{ fontSize: 13, fontWeight: activeModule === mi ? 600 : 400, lineHeight: 1.3, marginTop: 2 }}>{mod.title}</div>
                </div>
              </button>

              {activeModule === mi && (
                <div style={{ paddingLeft: 16 }}>
                  {mod.weeks.map((w, wi) => (
                    <button
                      key={wi}
                      onClick={() => { setActiveWeek(wi); setActiveTab("lessons"); }}
                      style={{
                        width: "100%", textAlign: "left",
                        padding: "9px 16px",
                        background: activeWeek === wi ? `${mod.color}22` : "transparent",
                        border: "none", borderLeft: activeWeek === wi ? `2px solid ${mod.color}` : "2px solid #1e293b",
                        cursor: "pointer", color: activeWeek === wi ? "#e2e8f0" : "#475569",
                        fontSize: 12,
                      }}
                    >
                      <span style={{ color: mod.color, fontFamily: "'JetBrains Mono', monospace", marginRight: 6 }}>W{w.week}</span>
                      {w.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "28px 32px", overflowY: "auto" }}>
          {/* Week Header */}
          <div style={{
            background: `linear-gradient(135deg, ${module.color}22, ${module.color}08)`,
            border: `1px solid ${module.color}33`,
            borderRadius: 16, padding: "22px 28px", marginBottom: 28
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <span style={{ fontSize: 28 }}>{module.icon}</span>
              <div>
                <div style={{ fontSize: 12, color: module.color, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
                  Module {module.id} · Week {week.week}
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, marginTop: 2 }}>{week.title}</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 6 }}>
              {week.lessons.length} lessons · {week.classwork.length} classwork activities · 1 assignment
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "#1a1a22", padding: 4, borderRadius: 12, width: "fit-content" }}>
            {["lessons", "classwork", "assignment"].map(tab => (
              <button
                key={tab}
                className="tab-btn"
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer",
                  background: activeTab === tab ? module.color : "transparent",
                  color: activeTab === tab ? "#000" : "#64748B",
                  fontWeight: activeTab === tab ? 700 : 400,
                  fontSize: 13, textTransform: "capitalize",
                  opacity: activeTab === tab ? 1 : 0.7,
                  transition: "all 0.15s ease"
                }}
              >
                {tab === "lessons" ? `📖 Lessons` : tab === "classwork" ? `✏️ Classwork` : `📝 Assignment`}
              </button>
            ))}
          </div>

          {/* Lessons */}
          {activeTab === "lessons" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {week.lessons.map((lesson, li) => {
                const key = `${activeModule}-${activeWeek}-${li}`;
                const done = !!completedLessons[key];
                return (
                  <div
                    key={li}
                    className="lesson-card"
                    style={{
                      background: "#141420",
                      border: `1px solid ${done ? module.color + "55" : "#1e293b"}`,
                      borderRadius: 14, padding: "20px 24px",
                      opacity: done ? 0.75 : 1
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                            color: module.color, fontWeight: 700,
                            background: `${module.color}18`, padding: "2px 8px", borderRadius: 6
                          }}>#{String(li + 1).padStart(2, '0')}</span>
                          <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: -0.3 }}>{lesson.title}</h3>
                        </div>
                        <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7, marginBottom: 14 }}>{lesson.description}</p>
                        <a
                          href={lesson.video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            background: "#FF0000", color: "#fff",
                            padding: "8px 16px", borderRadius: 8,
                            fontSize: 13, fontWeight: 600,
                            transition: "opacity 0.15s"
                          }}
                        >
                          <span>▶</span> Watch: {lesson.video.label}
                        </a>
                      </div>
                      <button
                        className="check-circle"
                        onClick={() => toggleLesson(key)}
                        style={{
                          width: 36, height: 36, borderRadius: "50%", border: `2px solid ${done ? module.color : "#2d2d3a"}`,
                          background: done ? module.color : "transparent",
                          cursor: "pointer", flexShrink: 0,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 16, color: done ? "#000" : "#2d2d3a"
                        }}
                      >✓</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Classwork */}
          {activeTab === "classwork" && (
            <div style={{ background: "#141420", border: "1px solid #1e293b", borderRadius: 14, padding: "28px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${module.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✏️</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17 }}>In-Class Activities</div>
                  <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>Complete during your study session</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {week.classwork.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 20px", background: "#0f0f16", borderRadius: 10, border: "1px solid #1e293b" }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                      background: `${module.color}22`, border: `1px solid ${module.color}44`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700, color: module.color
                    }}>{i + 1}</div>
                    <div style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.6, paddingTop: 4 }}>{item}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: "14px 18px", background: `${module.color}0D`, borderRadius: 10, border: `1px dashed ${module.color}44`, fontSize: 13, color: "#94A3B8" }}>
                💡 <strong style={{ color: module.color }}>Tip:</strong> Try each activity in your browser console or a CodePen/JSFiddle before moving on to the assignment.
              </div>
            </div>
          )}

          {/* Assignment */}
          {activeTab === "assignment" && (
            <div style={{ background: "#141420", border: `1px solid ${module.color}44`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ background: `linear-gradient(135deg, ${module.color}22, ${module.color}0A)`, padding: "22px 28px", borderBottom: `1px solid ${module.color}33` }}>
                <div style={{ fontSize: 11, color: module.color, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Week {week.week} Assignment</div>
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>{week.assignment.title}</div>
              </div>
              <div style={{ padding: "28px 32px" }}>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: module.color, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>📋 Description</div>
                  <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.8 }}>{week.assignment.description}</p>
                </div>
                <div style={{ padding: "16px 20px", background: "#0f0f16", borderRadius: 10, border: "1px solid #1e293b" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Deliverable</div>
                  <div style={{ fontSize: 14, color: "#CBD5E1", fontFamily: "'JetBrains Mono', monospace" }}>{week.assignment.deliverable}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}