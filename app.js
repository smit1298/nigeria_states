const selectElement = document.querySelector("select");
console.log(nigeria);

for (let i = 0; i < nigeria.length; i++) {
  const optionElement = document.createElement("option");
  optionElement.textContent = nigeria[i].state.name;
  optionElement.setAttribute("value", i);
  optionElement.setAttribute("id", i);
  selectElement.insertAdjacentElement("beforeend", optionElement);
}



selectElement.addEventListener("click", function (e) {
  const indexOfState = e.target.value
  const lgaElement = document.getElementById("lga")
  const numberOfLGAElement = document.getElementById('number_of_lga')
  numberOfLGAElement.textContent = nigeria[indexOfState].state.locals.length

  const nameOfStateElement = document.getElementById('name_of_state')
  nameOfStateElement.textContent = nigeria[indexOfState].state.name
  injectOption (nigeria[indexOfState].state.locals, lgaElement)
});

function injectOption(data, element) {
  element.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    const optionElement = document.createElement("option");
    optionElement.textContent = data[i].name;
    optionElement.setAttribute("value", i);
    optionElement.setAttribute("id", i);
    element.insertAdjacentElement("beforeend", optionElement);
  }
}
