import React, { ReactNode } from 'react';

import { Flex } from 'rebass';

const MainContainer = ({
  children,
  padding,
  fullwidth,
  nopadding = 'false',
  ...rest
}: any) => {
  let padT = [4, 4];
  let padR = [3, 3, 0];
  let padB = [4, 4];
  let padL = [3, 3, 0];

  if (padding) {
    padT = '50px';
    padB = '50px';
  }

  return (
    <Flex
      maxWidth={fullwidth ? '100%' : '1400px'}
      width="100%"
      flexWrap="wrap"
      mx={[0, 'auto']}
      pt={padT}
      pl={padL}
      pb={padB}
      pr={padR}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default MainContainer;
