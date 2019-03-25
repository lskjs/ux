import React from 'react';
import Story from '../../../Story';
import DEV from '../../../DEV';
import Performance from '../../../DEV/Performance';
import AllControlsForm from './AllControlsForm';

export default ({ storiesOf }) =>
  storiesOf('Form2/debug', module)
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

