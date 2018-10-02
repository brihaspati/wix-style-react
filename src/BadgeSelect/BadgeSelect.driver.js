import React from 'react';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import {badgeDriverFactory} from 'wix-ui-backoffice/dist/src/components/Badge/Badge.driver';
import ReactDOM from 'react-dom';

const badgeSelectDriverFactory = ({element, wrapper, component, eventTrigger}) => {
  const badgeWrapper = element.querySelector('[data-hook=badgeSelect-badge-wrapper]');
  const dropdownLayout = element.querySelector('[data-hook=badgeSelect-dropdownLayout]');
  const badgeDriver = badgeDriverFactory({element: badgeWrapper.childNodes[0], wrapper: badgeWrapper, eventTrigger});
  const dropdownLayoutDriver = dropdownLayoutDriverFactory({element: dropdownLayout, wrapper});

  const driver = {
    exists: () => !!element,
    outsideClick: () => document.body.dispatchEvent(new Event('mouseup', {cancelable: true})),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };

  return {driver, badgeDriver, dropdownLayoutDriver};
};

export default badgeSelectDriverFactory;
