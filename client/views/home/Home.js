/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/Layout';

const title = 'Starter Kit';
const link = 'https://github.com/kriasoft/aspnet-starter-kit';

const Home = (props) => (
  <Layout>
    <Helmet title={title} />
    <h1 className="mdl-typography--title">Welcome to {title}!</h1>
    <p className="mdl-typography--body-1">
      For more information visit <a href={link}>{link}</a>
    </p>
    <h4 className="mdl-typography--title">Articles</h4>
    <ul>
      {props.articles.map((article, i) =>
        <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
      )}
    </ul>
  </Layout>
);

Home.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Home;
