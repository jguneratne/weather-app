import { locationsMenu } from "./variables";

export function toggleLocation() {
  locationsMenu.addEventListener("change", () => {
    const menuOptions = Array.from(locationsMenu);

    for (let option of menuOptions) {
      option.removeAttribute("selected", true);
      if (option.selected) {
        option.setAttribute("selected", true);
      }
    }
  });
}
