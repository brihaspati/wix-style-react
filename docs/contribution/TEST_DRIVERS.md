# Test drivers
Test driver is a simple abstraction on top of component and supply a good way to interact with the component.

## Types of drivers
We support two types of drivers:
  * `enzyme` and `vanilla` for regular dom interaction.
  * `protractor` for browser interaction.
1. The enzyme / vanilla drivers should be written without any enzyme related functionality, they should stay pure vanilla dom manipulation.
1. Components use `data-hook`s to easily locate parts of the DOM. We use them in the driver to query the elements..

## Best Practices
1. Drivers should be used for when testing and do one of the following:
  * Make a side effect (e.g. click)
  * Retrieve some primitive value as string, number or boolean (e.g. some value / is checked)
1. Drivers should help testing the behavior and the DOM and not test React, so never check for component props.
1. Drivers are tested internally in the library and exposed to consumers as TestKits.
1. Drivers should have the `exists()` method to verify component is rendered properly.
1. Never return a `DOM` element as this is not a good abstraction over the component.


## Exposed TestKits
1. Each component has a `<componentName>TestkitFactory` method which exposes  the test driveri of the relevant to component.
1. A TestKit input is a wrapper object (DOM node for vanilla, enzyme wrapper for enzyme) and `dataHook`, and returns an object which contains all API methods.
1. Export your `testkitFactory` from the following files:
  * `wix-style-react/testkit/index.js`
  * `wix-style-react/testkit/enzyme.js`
  * `wix-style-react/testkit/protractor.js`
1. Each component tests should use the sanity check for TestKit with `isTestkitExists` and `isEnzymeTestkitExists`

### Consumer Usage example

Using wix style Button in your production code:

```js
<MyForm>
  ...
  <Button dataHook="my-button" />
  ...
</MyForm>
```

Inside your test:

```js
import ReactTestUtils from 'react-dom/test-utils';
import {buttonTestkitFactory} from 'wix-style-react/testkit';

const myFormWrapper = ReactTestUtils.renderIntoDocument(<MyForm...>);

//Initialize the testkit:
const buttonTestkit = buttonTestkitFactory({wrapper: myFormWrapper, dataHook: 'my-button'});//testkit factory should receive a DOM element wrapper and an dataHook and expose an api for it

//Use the testkit
buttonTestkit.click();
```

If you are using Enzyme:

```js
import {mount} from 'enzyme';
import {buttonTestkitFactory} from 'wix-style-react/testkit/enzyme';

const myFormWrapper = mount(<MyForm...>);

//Initialize the testkit:
const buttonTestkit = buttonTestkitFactory({wrapper: myFormWrapper, dataHook: 'my-button'});//testkit factory should receive an Enzyme wrapper and an dataHook and expose an api for it

//Use the testkit
buttonTestkit.click();
```


If you are using Protractor:

```js
import {buttonTestkitFactory, waitForVisibilityOf} from 'wix-style-react/testkit/protractor';

const dataHook = 'my-button';

//Pass the data hook and expose the driver API
const driver = buttonTestkitFactory({dataHook});

//Go to your app URL which has the component in it
browser.get(appUrl);

//waitForVisibilityOf(..) waits untill the element/elements appears, and starts the tests.
//Otherwise it will timeout and print the 2nd arg as error message.
//This function accepts an element or an array of elements
waitForVisibilityOf(driver.element(), 'Cant find Button')
  .then(() => {

    //Do actual tests here
    expect(driver.getButtonText()).toBe('Click Me!');
    driver.click();
    expect(driver.getButtonText()).toBe('Clicked!');
  });
```
