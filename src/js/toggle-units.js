import { unitsInput } from "./variables";

export function getAndToggleUnits() {
  if (!JSON.parse(localStorage.getItem("unitValue"))) {
    localStorage.setItem("unitValue", JSON.stringify("us"));
    console.log(JSON.parse(localStorage.getItem("unitValue")));
  } else {
    unitsInput.value = JSON.parse(localStorage.getItem("unitValue"));
  }

  for (let unit of unitsInput) {
    if (JSON.parse(localStorage.getItem("unitValue")) === unit.value) {
      unit.setAttribute("checked", true);
    } else {
      unit.removeAttribute("checked", false);
    }

    unit.addEventListener("change", () => {
      if (unit.checked) {
        localStorage.setItem("unitValue", JSON.stringify(unit.value));
        unit.setAttribute("checked", true);
      } else if (!unit.checked) {
        unit.removeAttribute("checked", true);
      }
    });
  }

  console.log(JSON.parse(localStorage.getItem("unitValue")));
}
