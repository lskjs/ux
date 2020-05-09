import React from 'react';
import Story from '@lskjs/dev/Story';
import Button from '@lskjs/button';

import PopoverMenu from './PopoverMenu';

export default ({ storiesOf }) =>
  storiesOf('ui/PopoverMenu', module)
    .add('Default', () => (
      <Story>
        <div style={{ textAlign: 'center' }}>
          <PopoverMenu
            layer="layer"
            layerStyle={{
              width: 400,
              height: 264,
              backgroundColor: '#fff',
              borderRadius: 8,
              boxShadow: '-8px 12px 50px -3px rgba(70, 70, 172, 0.32)',
            }}
            transitionDelay={300}
            isToggleHover
            trigger={({ triggerRef, toggle, open }) => (
              <Button type="button" htmlRef={triggerRef} onClick={toggle} onMouseEnter={() => open()}>
                Тест
              </Button>
            )}
          />
        </div>
      </Story>
    ))
    .add('Placement', () => (
      <Story>
        <div style={{ textAlign: 'center' }}>
          <PopoverMenu
            layer={<div style={{ padding: 10 }}>layer</div>}
            layerStyle={{
              width: 400,
              height: 264,
              backgroundColor: '#fff',
              borderRadius: 8,
              boxShadow: '-8px 12px 50px -3px rgba(70, 70, 172, 0.32)',
            }}
            placement={{
              anchor: 'RIGHT_TOP',
              autoAdjust: true,
              snapToAnchor: false,
              triggerOffset: 10,
            }}
            transitionDelay={300}
            trigger={({ triggerRef, toggle }) => (
              <Button type="button" htmlRef={triggerRef} onClick={toggle}>
                Тест
              </Button>
            )}
          />
        </div>
      </Story>
    ));
