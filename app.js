const selectElement = document.querySelector("select");


for (let i = 0; i < nigeria.length; i++) {
  const optionElement = document.createElement("option");
  optionElement.textContent = nigeria[i].state.name;
  optionElement.setAttribute("value", i);
  optionElement.setAttribute("id", i);
  selectElement.appendChild(optionElement);
}
