import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const H1 = (props) =>
(
  <h1 className="mdl-typography--title">{props.children}</h1>
);

H1.propTypes = {
  children: PropTypes.node,
};

export const Panel = styled.div`
`;
