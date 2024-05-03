let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

addEventListener("keydown", function (event) {
    let keys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "-",
      "*",
      "/",
      ".",
      "(",
      ")",
      "=",
    ];
    if (keys.includes(event.key)) {
      append(event.key);
    }
    if (event.key === "c" || event.key === "C") {
      clearInput();
    }
    if (event.key === "Enter") {
      calculate();
    }
    if (event.key === "Backspace") {
      document.getElementById("display").value = document
        .getElementById("display")
        .value.slice(0, -1);
    }
  });