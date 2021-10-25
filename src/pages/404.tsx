import React, { useState } from 'react';
import Layout from '../ui-components/layout';
import MainContainer from '../ui-components/container/container';

import { Flex, Image, Button, Heading } from 'rebass';

const Page = () => {
  return (
    <Layout>
      <main>
        <MainContainer>
          <Heading as="h1" variant="subheading" color='ourBlack' flex="0 1 100%" maxWidth="100%" textAlign="center" mt={5}>
            Why are you here? Just go home.
          </Heading>
        </MainContainer>
      </main>
    </Layout>
  );
};

export default Page;
