import { unitsInput, unitGroup } from "./variables";

export function getAndToggleUnits() {
  unitsInput.forEach((input) => {
    input.addEventListener("change", () => {
      for (let unit of unitsInput) {
        if (unit.checked) {
          unit.setAttribute("checked", true);
          unitGroup.enteredUnitGroup = unit.value;
        } else if (!unit.checked) {
          unit.removeAttribute("checked", true);
        }
      }
      console.log(unitGroup.userUnitGroup);
    });
  });
}
