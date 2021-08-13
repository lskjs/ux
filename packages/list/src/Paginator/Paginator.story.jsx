/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';

import Next from '../assets/icons/navigate-next';
import Prev from '../assets/icons/navigate-prev';
import Story from '../Story';
import Paginator from './Paginator';

export default ({ storiesOf }) => {
  storiesOf('buzzguru-ui/Paginator', module)
    .add('Default', () => (
      <Story>
        <Paginator
          pageCount={10}
          showLessPages
          pageRangeDisplayed={4}
          outerStyle={{ marginTop: 91 }}
          nextTitle="Следующая"
          prevTitle="Предыдущая"
          mobileNextTitle="Вперед"
          mobilePrevTitle="Назад"
        />
      </Story>
    ))
    .add('White', () => (
      <Story>
        <div
          style={{
            padding: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paginator
            pageCount={10}
            showLessPages
            pageRangeDisplayed={4}
            nextTitle="Следующая"
            prevTitle="Предыдущая"
            mobileNextTitle="Вперед"
            mobilePrevTitle="Назад"
          />
        </div>
      </Story>
    ))
    .add('More', () => (
      <Story>
        <div
          style={{
            padding: 12,
            backgroundColor: '#f2f3fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Paginator
            pageCount={20}
            showLessPages
            pageRangeDisplayed={4}
            onChange={({ selected }) => console.log(selected)}
            nextLabel={<Next size={12} style={{ marginLeft: 14 }} color="#9b9b9b" />}
            prevLabel={<Prev size={12} style={{ marginRight: 14 }} color="#9b9b9b" />}
          />
        </div>
      </Story>
    ))
    .add('Less', () => (
      <Story>
        <div
          style={{
            padding: 12,
            backgroundColor: '#f2f3fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Paginator
            pageCount={3}
            showLessPages
            pageRangeDisplayed={4}
            nextLabel={<Next size={12} style={{ marginLeft: 14 }} color="#9b9b9b" />}
            prevLabel={<Prev size={12} style={{ marginRight: 14 }} color="#9b9b9b" />}
          />
        </div>
      </Story>
    ))
    .add('Initial page', () => (
      <Story>
        <div
          style={{
            padding: 12,
            backgroundColor: '#f2f3fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Paginator
            pageCount={15}
            showLessPages
            pageRangeDisplayed={4}
            initialPage={13}
            nextLabel={<Next size={12} style={{ marginLeft: 14 }} color="#9b9b9b" />}
            prevLabel={<Prev size={12} style={{ marginRight: 14 }} color="#9b9b9b" />}
          />
        </div>
      </Story>
    ))
    .add('Controlled', () => {
      const [page, setPage] = React.useState(1);
      console.log('controlled page', page);
      return (
        <Story>
          <div
            style={{
              padding: 12,
              backgroundColor: '#f2f3fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Paginator
              pageCount={15}
              showLessPages
              pageRangeDisplayed={4}
              initialPage={page - 1}
              onChange={({ selected }) => {
                console.log('change', selected + 1);
                setPage(selected + 1);
              }}
              nextLabel={<Next size={12} style={{ marginLeft: 14 }} color="#9b9b9b" />}
              prevLabel={<Prev size={12} style={{ marginRight: 14 }} color="#9b9b9b" />}
            />
          </div>
        </Story>
      );
    });
};
