import Button from '@lskjs/button';
import ButtonGroup from '@lskjs/button/ButtonGroup';
import Link from '@lskjs/link';
import {isDev} from '@lskjs/utils/env';
import Page from '@lskjs/page';
import T from '@lskjs/t';
import { H1, H2 } from '@lskjs/typo';
import React from 'react';

import Slide from '../components/Slide';

export const HomeIndexPage = ({ about = {} }) => (
  <Page layout={Page.HomeLayout}>
    <Slide
      video={isDev ? null : 'https://demo.syndicad.com/bg.webm'}
      image="https://syndicad.com/c82aa481daa4b9038342b922678e33dc.jpg"
    >
      <div>
        <H1
          style={{
            color: '#fff',
          }}
        >
          {about.title}
          {about.v && <sup>{about.v}</sup>}
        </H1>
        <H2
          style={{
            color: '#fff',
          }}
        >
          {about.description}
        </H2>
        <br />
        <ButtonGroup padded style={{ marginTop: 30, width: 400 }}>
          <Button componentClass={Link} paint="primary" href="/cabinet">
            <T name="pages.cabinet.title" />
          </Button>
          {about.blog && (
            <Button componentClass={Link} href="/blog">
              Read Blog
            </Button>
          )}
          {about.github && (
            <Button componentClass={Link} href={about.github} target="_blank">
              GitHub
            </Button>
          )}
        </ButtonGroup>
      </div>
    </Slide>
  </Page>
);

HomeIndexPage.propTypes = {
  about: Object,
};

export default HomeIndexPage;
