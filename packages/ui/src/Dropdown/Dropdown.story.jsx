import React, { PureComponent } from 'react';
import Button from '@lskjs/button';
import Story from '@lskjs/dev/Story';
import DotsIcon from './icons/dots-icon-horizontal';
import Dropdown from './Dropdown';

window.__DEV__ = true;
class Drp extends PureComponent {
  state = {
    pull: 'start',
    placement: 'bottom',
  }
  render() {
    const { pull, placement } = this.state;
    return (
      <div style={{ marginTop: 100 }}>
        <Dropdown
          id="drop"
          pull={pull}
          placement={placement}
          trigger={({ isOpen, onClick }) => (
            <Button
              view="text"
              paint="primary"
              icon={<DotsIcon />}
              active={isOpen}
              onClick={onClick}
            />
          )}
        >
          <Dropdown.Item
            componentClass="button"
            onClick={() => alert('click')}
          >
            Админские блогеры
          </Dropdown.Item>
          <Dropdown.Item
            componentClass="a"
            href="https://google.com"
          >
            Админские компании
          </Dropdown.Item>
          {/* <Dropdown.Item>
            <LargeUser
              user={{
                _id: 1,
                avatar: 'https://pp.userapi.com/c308316/v308316100/b2af/wUTdHyAUrxg.jpg',
                title: 'Администрация ВКонтакте',
                name: 'Злая собака',
              }}
            />
          </Dropdown.Item> */}
        </Dropdown>
        <div style={{ marginTop: 300 }}>
          <h3>Pull</h3>
          <Button
            onClick={() => this.setState({ pull: 'start' })}
            paint="primary"
          >
            start
          </Button>
          <Button
            onClick={() => this.setState({ pull: 'end' })}
            paint="primary"
          >
            end
          </Button>
        </div>
        <div>
          <h3>Placement</h3>
          <Button
            onClick={() => this.setState({ placement: 'top' })}
            paint="primary"
          >
            top
          </Button>
          <Button
            onClick={() => this.setState({ placement: 'bottom' })}
            paint="primary"
          >
            bottom
          </Button>
          <Button
            onClick={() => this.setState({ placement: 'left' })}
            paint="primary"
          >
            left
          </Button>
          <Button
            onClick={() => this.setState({ placement: 'right' })}
            paint="primary"
          >
            right
          </Button>
        </div>
      </div>
    );
  }
}

export default ({ storiesOf }) => {
  storiesOf('ui/Dropdown', module)
    .add('Default', () => (
      <Story>
        <Drp />
      </Story>
    ));
};
