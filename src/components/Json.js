import React from 'react';

const Json = (props) => (
  <pre>{JSON.stringify(props.data, 0, 2)}</pre>
);

export default Json;