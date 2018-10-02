const badgeSelectDriverFactory = component => ({
  /** Get the badge element */
  getBadge: () => component.$(`[data-hook="badgeSelect-badge-wrapper"] div`),
  /** Get the dropdown layout element */
  getDropdown: () => component.$(`[data-hook="dropdown-layout-options"]`),
  /** Get a dropdown item element */
  getDropdownItem: index => component.$$(`[data-hook="dropdown-layout-options"] div`).get(index).getText(),
  /** Get the dropdown items count */
  getDropdownItemsCount: () => component.$$(`[data-hook="dropdown-layout-options"] div`).getText().count(),
  /** Returns the element */
  element: () => component
});

export default badgeSelectDriverFactory;
