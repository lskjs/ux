import React from 'react';

import Story from '../../../Story';
import DEV from '../../../DEV';
import AllControlsForm from './AllControlsForm';

export default ({ storiesOf }) =>
  storiesOf('Form2/debug', module)
    .add('enableReinitialize', () => {
      return (
        <Story state={{}}>
          {(state, setState) => (
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <AllControlsForm
                        enableReinitialize
                        initialValues={state}
                        onChange={setState}
                      />
                    </td>
                    <td>
                      <AllControlsForm
                        enableReinitialize
                        initialValues={state}
                        onChange={setState}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <DEV json={state} />
            </div>
          )}
        </Story>
      );
    });

