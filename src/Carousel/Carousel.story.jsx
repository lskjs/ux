import React from 'react';
import Story from '../Story';
import Carousel from './Carousel';

export default ({ storiesOf }) => (
  storiesOf('Carousel', module)
    .add('default', () => (
      <Story>
        <div style={{ border: '1px solid red' }}>
          <Carousel>
            <aside>
              <h1>items 1</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
            <aside>
              <h1>items 2</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
            <aside>
              <h1>items 3</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
            <aside>
              <h1>items 4</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
            <aside>
              <h1>items 5</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
            <aside>
              <h1>items 6</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
            <aside>
              <h1>items 7</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
            <aside>
              <h1>items 8</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
            <aside>
              <h1>items 9</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
            <aside>
              <h1>items 10</h1>
              <div>
                <img src="https://i.imgur.com/LWhwV.gif" width="400" height="400" alt="мопсик" />
              </div>
              <p>Привет привет привет привет привет привет привет привет Привет привет привет привет привет привет привет привет</p>
            </aside>
          </Carousel>
        </div>
      </Story>
    ))
);
