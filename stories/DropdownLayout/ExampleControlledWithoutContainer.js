import React, {Component} from 'react';
import DropdownLayout from 'wix-style-react/DropdownLayout';
import {Button} from 'wix-style-react/Backoffice';

const options = [
  {id: 1, value: 'Option 1'},
  {id: 2, value: 'Option 2'},
  {id: 3, value: 'Option 3'},
  {id: 4, value: 'Option 4'},
];

class ControlledExample extends Component {
  render() {
    return (
      <div style={{width: 300}}>
        <DropdownLayout visible
                        options={options}
                        isInContainer={false}
                        selectedId={2}/>
      </div>
    );
  }
}

export default () => <ControlledExample/>;
