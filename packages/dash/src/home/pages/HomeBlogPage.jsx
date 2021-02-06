import Article from '@lskjs/article';
import DEV from '@lskjs/dev';
import Page from '@lskjs/page';
import React from 'react';

const HomeBlogPage = ({ title, content }) => (
  <Page layout={Page.HomeLayout}>
    <Page.Header />
    <Article title={title} content={content} />
    <DEV json={{ title, content }} />
  </Page>
);

HomeBlogPage.propTypes = {
  title: String,
};

export default HomeBlogPage;
