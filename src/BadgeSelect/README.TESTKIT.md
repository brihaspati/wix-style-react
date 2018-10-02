# `<BadgeSelect/>` component

## Enzyme / ReactTestUtils TestKit API

The following TestKit is exposing the driver for the [`<Badge/>`
component](https://wix-wix-style-react.surge.sh/?selectedKind=12.%20Other&selectedStory=12.1%20Badge&full=0&addons=0&stories=1&panelRight=0),
the [`<DropdownLayout/>`
component](https://wix-wix-style-react.surge.sh/?selectedKind=11.%20Pickers%20and%20Selectors&selectedStory=11.1%20DropdownLayout&full=0&addons=0&stories=1&panelRight=0)
and add its own driver methods. See the examples below for usage.

| Method | Arguments | Returned value | Description |
|--------|-----------|----------------|-------------|
| `exists` | - | `boolean` | Returns 'true' wether the element exists |
| `outsideClick` | - | -| Performs a click outside the component |
| `setProps` | `object` | -| Set the props for the component |

### Example usage

```javascript
import React from 'react';
import {badgeSelectTestkitFactory} from 'wix-style-react/dist/testkit';

// ...

const {
  driver: badgeSelectDriver,
  badgeDriver,
  dropdownLayoutDriver
} = badgeSelectTestkitFactory({wrapper, dataHook});

// ...
```

## Protractor TestKit API

| Method | Arguments | Returned value | Description |
|--------|-----------|----------------|-------------|
| `getBadge` | - | `element` | Get the badge element |
| `getDropdown` | - | `element` | Get the dropdown layout element |
| `getDropdownItem` | `number` | `element` | Get a dropdown item element |
| `getDropdownItemsCount` | - | `number` | Get the dropdown items count |
| `element` | - | `element` | Returns the element |
