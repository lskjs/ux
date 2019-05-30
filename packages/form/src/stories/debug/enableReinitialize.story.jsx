import React from 'react';
import Story from '@lskjs/dev/Story';
import DEV from '@lskjs/dev/DEV';
import Performance from '@lskjs/dev/Performance';
import AllControlsForm from './AllControlsForm';

export default ({ storiesOf }) =>
  storiesOf('debug', module)
    .add('enableReinitialize', () => {
      return (
        <Story state={{}} performance={false}>
          {(state, setState) => (
            <Performance>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <AllControlsForm
                          enableReinitialize
                          initialValues={state}
                          onChange={values => setState(values)}
                        />
                      </td>
                      <td>
                        <AllControlsForm
                          enableReinitialize
                          initialValues={state}
                          onChange={values => setState(values)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <DEV json={state} />
              </div>
            </Performance>
          )}
        </Story>
      );
    });

