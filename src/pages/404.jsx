/*
* This page exists to serve an error message if the visitor navigates to a page that doesn't exist
* */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>It seems the page you navigated to does not actually exist! If you believe you reached this page in error,
    please send me an email so I can get it fixed! I appreciate it!</p>
    <p><em>TLH</em></p>
  </Layout>
);

export default NotFoundPage;
