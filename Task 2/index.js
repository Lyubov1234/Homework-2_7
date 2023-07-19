btn2.onclick = function () {
  alert("через свойство элемента");
};

function button3() {
  alert("через метод addEventListener ");
}
btn3.addEventListener("click", button3);
