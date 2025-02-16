/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Head from '@docusaurus/Head';

import Layout from '@theme/Layout';

import Home from './Home';

const Index = () => {
  return (
    <Layout
      description="Scalable communication between agents"
      wrapperClassName="homepage">
      <Head>
        <title>Agora Protocol - Scalable Communication Between Agents</title>
        <meta
          property="og:title"
          content="Agora Protocol · Scalable Communication Between Agents"
        />
        <meta
          property="twitter:title"
          content="Agora Protocol · Scalable Communication Between Agents"
        />
        <meta name="algolia-site-verification" content="9C1C6A5FA75676C3" />
      </Head>
      <Home />
    </Layout>
  );
};

export default Index;
