/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const Header = styled.h1`
  display: block
`;

const About = () => (
  <Layout>
    <Helmet title="About Us" />
    <Header>About Us</Header>
  </Layout>
  );

export default About;
