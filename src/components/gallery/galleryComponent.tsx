/** @jsx jsx */
import { css } from '@emotion/core';
import { FC } from 'react';
import { graphql } from 'gatsby';
import { Box, Link } from 'rebass';
import MainContainer from '../../ui-components/container/container';
import { Image } from '../../ui-components/images/images';
import Gallery from '@browniebroke/gatsby-image-gallery'

import { jsx } from 'theme-ui';

// import Gallery from './gallery';
import MasonryLayout from './masonry';

interface Props {
  className?: string;
  data: [{
    id?: string;
    text: {
      text: string;
    };
    date: string;
    attribution: string;
    image: any;
  }];
  css?: any;
}

export const query = graphql`
  fragment ImageGallery on ContentfulImageGalleryItem {
    id
    attribution
    text {
      text
    }
    date
    image {
      ...ContentfulAsset
    }
    internal {
      type
    }
  }
`;



const ImageGallery: FC<Props & JSX.IntrinsicElements['div']> = ({
  className = '',
  data,
  ...rest
}) => {

  const processedImages = data.map((item) => ({
    image: item.image,
    caption: item.text?.text,
    attribution: item.attribution,
    aspectRatio: item.image.gatsbyImageData.height / item.image.gatsbyImageData.width
  }));

  return (
    <Box>
      <MainContainer>
        <MasonryLayout data={processedImages} />
      </MainContainer>
    </Box>
  );
};

export default ImageGallery;
