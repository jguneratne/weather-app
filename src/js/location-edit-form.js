import { handleLocationDropdown } from "./location-list";

export function editLocationList() {
  const editBtn = document.querySelector(".edit-btn-img");
  const editFormDiv = document.querySelector(".loc-edit-box");

  editBtn.addEventListener("pointerdown", (e) => {
    if (e.target === editBtn) {
      editFormDiv.style.display = "initial";

      const editForm = document.querySelector(".edit-form");

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

      for (let i = 0; i < menuLocales.length; i++) {
        const option = document.createElement("option");
        option.value = menuLocales[i];
        option.textContent = menuLocales[i];
        option.setAttribute("class", "options");

        editForm.appendChild(instruct);
        editForm.appendChild(selectMenu);
        selectMenu.appendChild(option);
        editForm.appendChild(removeBtn);
      }

      selectMenu.addEventListener("pointerdown", (e) => {
        const locToRemove = e.target.value;

        removeBtn.addEventListener("pointerdown", (e) => {
          e.preventDefault;

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
        });
      });
    }
  });
}
