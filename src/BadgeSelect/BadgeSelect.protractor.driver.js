const badgeSelectDriverFactory = component => ({
  getBadge: () => component.$(`[data-hook="badgeSelect-badge-wrapper"] div`),
  getDropdown: () => component.$(`[data-hook="dropdown-layout-options"]`),
  getDropdownItem: index => component.$$(`[data-hook="dropdown-layout-options"] div`).get(index).getText(),
  getDropdownItemsCount: () => component.$$(`[data-hook="dropdown-layout-options"] div`).getText().count(),
  element: () => component
});

export default badgeSelectDriverFactory;
