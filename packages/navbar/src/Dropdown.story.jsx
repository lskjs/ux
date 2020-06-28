import React from 'react';
import Story from '@lskjs/dev/Story';
import Button from '@lskjs/button';
import Dropdown from './Dropdown';
import GlobalStyles from './GlobalStyles';

window.__DEV__ = true;

const WrappedButton = React.forwardRef((props, ref) => <Button ref={ref} {...props} />);
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

export default ({ storiesOf }) =>
  storiesOf('navbar/Dropdown', module)
    .add('default', () => (
      <Story>
        <GlobalStyles />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Story>
    ))
    .add('button', () => (
      <Story>
        <GlobalStyles />
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Story>
    ));
