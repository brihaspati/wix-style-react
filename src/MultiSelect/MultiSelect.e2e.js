import {multiSelectTestkitFactory} from '../../testkit/protractor';
import {waitForVisibilityOf, mouseEnter} from 'wix-ui-test-utils/protractor';
import {getStoryUrl} from '../../test/utils/storybook-helpers';
import {protractor} from 'protractor';
import eyes from 'eyes.it';

describe('MultiSelect', () => {
  const storyUrl = getStoryUrl('3. Inputs', '3.8 Tags');

  beforeEach(() => {
    browser.get(storyUrl);
  });

  eyes.it('should show focus style (focused by keyboard)', async () => {
    const driver = multiSelectTestkitFactory({dataHook: 'multi-select-standard'});
    const element = driver.element();
    await waitForVisibilityOf(element, 'Cannot find <MultiSelect/>');
    await browser.actions().sendKeys(protractor.Key.TAB).perform();
    await browser.actions().sendKeys(protractor.Key.TAB).perform();
    // Should be focused
    await eyes.checkWindow('focused by keyboard');
    await mouseEnter(element);
    // Should be focused and hovered
  });

  eyes.it('should break to new line when needed', async () => {
    const ELEMENT_HEIGHT_MULTILINE = 66;
    const driver = multiSelectTestkitFactory({dataHook: 'multi-select-limited'});
    await waitForVisibilityOf(driver.element(), 'Cannot find <MultiSelect/>');
    for (let i = 0; i < 9; i++) {
      await driver.addTag();
    }
    const height = await driver.getHeight();

    expect(height).toBe(ELEMENT_HEIGHT_MULTILINE);

  }, {version: '<Input/> - On text click - select all'});
});
