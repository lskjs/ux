import React from 'react';
import Story from '@lskjs/dev/Story';
import Link from './Link';
import LinkProvider from './LinkProvider';

export default ({ storiesOf }) => (
  storiesOf('Link', module)
    .add('default', () => (
      <Story>
        <p>
          <Link
            href="/test"
          >
            Link /test
          </Link>
        </p>
        <p>
          <Link
            href="/test?a=1"
          >
            Link /test?a=1
          </Link>
        </p>
        <p>
          <Link
            href="/test"
            qs={{
              b: 2,
            }}
          >
            Link /test?b=2
          </Link>
        </p>
        <p>
          <Link
            href="/test?a=1"
            qs={{
              b: 2,
            }}
          >
            Link /test?a=1&b=2
          </Link>
        </p>
        <p>
          <Link
            href="/test"
            qs={{
              a: 3,
            }}
          >
            Link /test?a=3
          </Link>
        </p>
        <p>
          <Link
            href="/test?a=1"
            qs={{
              a: 3,
            }}
          >
            Link /test?a=3
          </Link>
        </p>
        <p>
          <Link  // eslint-disable-line
            qs={{
              a: 1,
              b: 2,
            }}
          >
            Link ?a=1&b=3
          </Link>
        </p>
        <p>
          <Link
            href="https://twitter.com/search"
            qs={{
              q: 'test',
            }}
          >
            Link https://twitter.com/search?q=test
          </Link>
        </p>
        <p>
          <Link
            href="#anchor"
          >
            Link #anchor
          </Link>
        </p>
        <p>
          <Link
            href="/test"
            qs={{
              user: {
                name: 'Igor Suvorov',
                username: 'isuvorov',
              },
            }}
          >
            Link /test?user=[Object]
          </Link>
        </p>
      </Story>
    ))
    .add('LinkProvider', () => (
      <Story>
        <LinkProvider
          onClick={(url, event) => {
            console.log('linkProvider.onClick: ', url, event);
          }}
        >
          <div>
            <Link
              href="/test"
              qs={{
                user: {
                  name: 'Igor Suvorov',
                  username: 'isuvorov',
                },
              }}
            >
              Link /test?user=[Object]
            </Link>
          </div>
        </LinkProvider>
      </Story>
    ))
);
