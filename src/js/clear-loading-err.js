import { loaderErr, clearErrBtn } from "./variables";

export function clearErr() {
  clearErrBtn.addEventListener("pointerdown", () => {
    loaderErr.style.display = "none";
  });

  clearErrBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      loaderErr.style.display = "none";
    }
  });
}
