#!/usr/bin/env node
// Above line is called a shebang. It tells the shell what program to interpret the file with.
// In this case, we are telling the shell to use node to interpret the file.
// This is only necessary if you want to run the file directly from the terminal.

function incrementByOne(type = "Home") {
  let element = type === 'Guest' ? document.getElementById('guest-score')
  : document.getElementById('home-score');

  element.textContent = parseInt(element.textContent) + 1;
}


function incrementByTwo(type = "Home") {
  let element = type === 'Guest' ? document.getElementById('guest-score')
  : document.getElementById('home-score');

  element.textContent = parseInt(element.textContent) + 2;
}


function incrementByThree(type = "Home") {
  let element = type === 'Guest' ? document.getElementById('guest-score')
  : document.getElementById('home-score');

  element.textContent = parseInt(element.textContent) + 3;
}
