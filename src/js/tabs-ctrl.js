import {
  todayTabBtn,
  datesDiv,
  date1Input,
  date2Input,
  today,
  todayMinusNine,
  yesterday,
  todayForecastDiv,
} from "./variables";

export function selectForecastTab() {
  // Example from https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role

  // Only handle one particular tablist; if you have multiple tab
  // lists (might even be nested), you have to apply this code for each one
  const tabList = document.querySelector('[role="tablist"]');
  const tabs = tabList.querySelectorAll(':scope > [role="tab"]');

  todayTabBtn.classList.add("tab-btn--active");
  todayForecastDiv.classList.add("forecast-info--active");

  // Add a click event handler to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("pointerdown", changeTabs);
  });

  tabs.forEach((tab) => {
    tab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        changeTabs(e);
      }
    });
  });

  // Enable arrow navigation between tabs in the tab list
  // Original example used Left + Right Arrows for horizontal tabs
  // I'm using Up + Down Arrows for vertical tabs, per documentation: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role

  let tabFocus = 0;

  tabList.addEventListener("keydown", (e) => {
    // Move down
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.key === "ArrowDown") {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move up
      } else if (e.key === "ArrowUp") {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
}

function changeTabs(e) {
  const targetTab = e.target;
  const tabList = targetTab.parentNode;
  const tabGroup = tabList.parentNode;

  console.log(e.target);

  // Remove all current selected tabs and remove active class
  tabList.querySelectorAll(':scope > [aria-selected="true"]').forEach((tab) => {
    tab.setAttribute("aria-selected", false);
    tab.classList.remove("tab-btn--active");
  });

  // Set this tab as selected
  targetTab.setAttribute("aria-selected", true);
  targetTab.classList.add("tab-btn--active");

  // Make historic dates selection visible if historic tab selected
  if (targetTab.dataset.tab === "historic") {
    date1Input.value = todayMinusNine;
    date1Input.setAttribute("max", yesterday);

    date2Input.value = today;
    date2Input.setAttribute("max", today);

    datesDiv.style.display = "initial";
  } else {
    datesDiv.style.display = "none";
  }

  // Hide all tab panels
  tabGroup.querySelectorAll(':scope > [role="tabpanel"]').forEach((panel) => {
    panel.classList.remove("forecast-info--active");
  });

  // Show the selected panel
  tabGroup
    .querySelector(`#${targetTab.getAttribute("aria-controls")}`)
    .classList.add("forecast-info--active");
}
