import React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import badgeGroupDriverFactory from './BadgeGroup.driver';
import BadgeGroup from './BadgeGroup';
import {SKIN} from 'wix-ui-backoffice/dist/src/components/Badge/constants';

describe('BadgeGroup', () => {
  const createDriver = createDriverFactory(badgeGroupDriverFactory);
  let badgeGroupDriver;
  const options = Object.values(SKIN).map((skin, id) => ({
    id: id.toString(),
    skin,
    text: skin
  }));
  createComponent();

  function createComponent(props = {}) {
    badgeGroupDriver = createDriver(<BadgeGroup options={options} selectedId={'0'} onSelect={() => {}} {...props}/>);
  }

  it('should successfully render a component', () => {
    createComponent();
    expect(badgeGroupDriver.driver.exists()).toBeTruthy();
    expect(badgeGroupDriver.dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  // describe.skip('Badge', () => {
  //   it('should show history panel with current color selected as previous', () => {
  //     const onChange = jest.fn();
  //     const onCancel = jest.fn();
  //     const onConfirm = jest.fn();
  //     const value = '#000000';
  //     createComponent({value, onChange, onCancel, onConfirm, showHistory: true});
  //     expect(driver.historyPanelExists()).toBeTruthy();
  //     expect(color(driver.historyCurrentColor()).hex()).toBe(value);
  //     expect(color(driver.historyPreviousColor()).hex()).toBe(value);
  //   });
  //
  //   it('should not update previous color after current color change but not confirm', () => {
  //     const onChange = jest.fn();
  //     const onCancel = jest.fn();
  //     const onConfirm = jest.fn();
  //     const value = '#00FF00';
  //     createComponent({value, onChange, onCancel, onConfirm, showHistory: true});
  //     driver.selectBlackColor();
  //     expect(color(driver.historyCurrentColor()).hex()).toBe('#000000');
  //     expect(color(driver.historyPreviousColor()).hex()).toBe(value);
  //   });
  //
  //   it('should set previous color to be active color', () => {
  //     const onChange = jest.fn();
  //     const onCancel = jest.fn();
  //     const onConfirm = jest.fn();
  //     const value = '#00FF00';
  //     createComponent({value, onChange, onCancel, onConfirm, showHistory: true});
  //     driver.selectBlackColor();
  //     expect(color(driver.historyCurrentColor()).hex()).toBe('#000000');
  //     expect(color(driver.historyPreviousColor()).hex()).toBe(value);
  //     driver.clickOnPreviousColor();
  //     expect(color(driver.historyCurrentColor()).hex()).toBe(value);
  //   });
  //
  //   it('should update previous color after confirm click', () => {
  //     const onChange = jest.fn();
  //     const onCancel = jest.fn();
  //     const onConfirm = jest.fn();
  //     const value = '#00FF00';
  //     createComponent({value, onChange, onCancel, onConfirm, showHistory: true});
  //     driver.selectBlackColor();
  //     expect(color(driver.historyCurrentColor()).hex()).toBe('#000000');
  //     expect(color(driver.historyPreviousColor()).hex()).toBe(value);
  //     driver.confirm();
  //     expect(color(driver.historyCurrentColor()).hex()).toBe('#000000');
  //     expect(color(driver.historyPreviousColor()).hex()).toBe('#000000');
  //   });
  // });
});
