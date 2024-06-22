let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML == "=") {
      let string = input.value;
      input.value = eval(input.value);
    } else if (button.innerHTML == "DEL") {
      let string = input.value;
      input.value = string.substring(0, string.length - 1);
    } else if (button.innerHTML == "RESET") {
      let string = "";
      input.value = "";
    } else {
      let string = input.value;
      input.value = string + button.innerHTML;
    }
  });
});

