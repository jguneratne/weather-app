import { handleLocationDropdown } from "./location-list";

import { locationsMenu, locationInput } from "./variables";

export function editLocationList() {
  const editBtn = document.querySelector(".edit-btn");
  const editBtnImg = document.querySelector(".edit-btn-img");
  const editFormDiv = document.querySelector(".loc-edit-box");

  editBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    if (
      (e.target === editBtn || e.target === editBtnImg) &&
      locationsMenu.length <= 1
    ) {
      editFormDiv.style.display = "initial";

      const noLocsDiv = document.createElement("div");
      noLocsDiv.setAttribute("class", "no-locs-div");

      const noLocs = document.createElement("p");
      noLocs.setAttribute("class", "no-locs");
      noLocs.textContent = "You do not have any saved locations.";
      noLocs.style.fontWeight = "bold";

      const confirmBtn = document.createElement("button");
      confirmBtn.type = "button";
      confirmBtn.textContent = "OK";
      confirmBtn.setAttribute("class", "confirm-btn");

      while (editFormDiv.firstChild) {
        editFormDiv.removeChild(editFormDiv.firstChild);
      }

      editFormDiv.appendChild(noLocsDiv);
      noLocsDiv.appendChild(noLocs);
      noLocsDiv.appendChild(confirmBtn);

      if (confirmBtn) {
        confirmBtn.focus();
      }
      confirmBtn.addEventListener("pointerdown", () => {
        editFormDiv.style.display = "none";
        locationInput.focus();
      });

      confirmBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          editFormDiv.style.display = "none";
          locationInput.focus();
        }
      });
    }

    if (
      (e.target === editBtn || e.target === editBtnImg) &&
      locationsMenu.length > 1
    ) {
      editFormDiv.style.display = "initial";

      const editForm = document.querySelector(".edit-form");

      const cancelDiv = document.createElement("div");
      cancelDiv.setAttribute("class", "cancel-div");

      const cancelBtn = document.createElement("button");
      cancelBtn.setAttribute("class", "cancel-btn");

      const cancelIcon = document.createElement("img");
      cancelIcon.setAttribute("class", "cancel-btn-img");
      cancelIcon.src = require("@images/icons/cancel-close-svgrepo-com.svg");
      cancelIcon.alt = "Close Window Button";

      const instruct = document.createElement("p");
      instruct.setAttribute("class", "instruct");
      instruct.textContent = "Select location to remove:";
      instruct.style.fontWeight = "bold";

      const menuLocales = JSON.parse(localStorage.getItem("locationValues"));

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.textContent = "Remove Location";
      removeBtn.setAttribute("class", "rmv-btn");

      const selectMenu = document.createElement("select");
      selectMenu.setAttribute("size", menuLocales.length + 1);
      selectMenu.setAttribute("name", "edit-menu");
      selectMenu.setAttribute("class", "edit-menu");

      while (editForm.firstChild) {
        editForm.removeChild(editForm.firstChild);
      }

      for (let i = 0; i < menuLocales.length; i++) {
        const option = document.createElement("option");
        option.value = menuLocales[i];
        option.textContent = menuLocales[i];
        option.setAttribute("class", "options");

        editForm.appendChild(cancelDiv);
        cancelDiv.appendChild(cancelBtn);
        cancelBtn.appendChild(cancelIcon);
        editForm.appendChild(instruct);
        editForm.appendChild(selectMenu);
        selectMenu.appendChild(option);
        editForm.appendChild(removeBtn);
      }

      let locToRemove = "";

      selectMenu.addEventListener("pointerdown", (e) => {
        locToRemove = e.target.value;
      });

      editFormDiv.addEventListener("pointerdown", (e) => {
        if (e.target === cancelIcon) {
          editFormDiv.style.display = "none";
        }

        if (e.target === removeBtn) {
          // create removeLocation variable to retrieve duplicate entered location and remove from locationValues
          const removeLocation = JSON.parse(
            localStorage.getItem("locationValues"),
          );
          removeLocation.splice(menuLocales.indexOf(locToRemove), 1);

          localStorage.setItem(
            "locationValues",
            JSON.stringify(removeLocation),
          );
          console.log(JSON.parse(localStorage.getItem("locationValues")));

          // rebuild location select menu to reflect new order of locations
          handleLocationDropdown();

          editFormDiv.style.display = "none";
        }
      });
    }
  });
}
