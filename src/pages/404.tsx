import React, { useState } from 'react';
import Layout from '../ui-components/layout';
import MainContainer from '../ui-components/container/container';

import { Flex, Image, Button, Heading, Text } from 'rebass';

const Page = () => {
  return (
    <Layout>
      <main>
        <MainContainer>
          <Text css={{ flex: "0 1 100%", maxWidth: "100%", textAlign: "center", mt: '30px', fontSize: '7em'}}>🎉🥳🎈</Text>
          <Heading as="h1" variant="subheading" color='ourBlack' css={{fontFamily: 'sans-serif', fontSize: '3em'}} flex="0 1 100%" maxWidth="100%" textAlign="center" m='30px auto'>
            Hey, wanna celebrating your life? 
          </Heading>
          <Button as='a' m='30px auto' href='/birthday' color='white' bg='black'>Might consider clicking this button</Button>
        </MainContainer>
      </main>
    </Layout>
  );
};

export default Page;
