import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { graphql } from 'gatsby';

export const ContentfulAsset = graphql`
  fragment ContentfulAsset on ContentfulAsset {
    title
    description
    gatsbyImageData(layout: FIXED)
    internal {
      type
    }
  }
`;

export const Image = ({ className, src, ...rest }) => {
  return src ? (
    <GatsbyImage
      className={className}
      image={src.gatsbyImageData}
      alt={src.title || src.description}
      {...rest}
    />
  ) : null;
};
