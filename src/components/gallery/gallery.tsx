import { Image as GatsbyImage } from '../../ui-components/images/images';
import { chunk, sum } from 'lodash';
import React from 'react';
import { Box, Image } from 'rebass';

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints }) => {
    const aspectRatios = images.map(image => image.aspectRatio);
  
    // For each breakpoint, calculate the aspect ratio sum of each row's images
    const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
      itemsPerRow =>
        // Split images into groups of the given size
        chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
          // Sum aspect ratios of images in the given row
          sum(rowAspectRatios),
        ),
    );
  
    return (
      <div>
        {images.map((image, i) => (
          <Box
            width={rowAspectRatioSumsByBreakpoints.map(
              // Return a value for each breakpoint
              (rowAspectRatioSums, j) => {
                console.log(image.image.gatsbyImageData.images.sources[0].srcSet.split('?')[0]);
                const image_aspectRatio = image.image.gatsbyImageData.width / image.image.gatsbyImageData.height;
                // Find out which row the image is in and get its aspect ratio sum
                const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
                const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
                return `${(image_aspectRatio / rowAspectRatioSum) * 100}% !important`;
              },
            )}
            css={`
              display: inline-block;
              vertical-align: middle;
              transition: filter 0.3s;
              overflow: hidden;
              :hover {
                filter: brightness(87.5%);
              }
            `}>
            <Box
              key={image.src}
              as={GatsbyImage}
              src={image.image}
              title={image.caption}
              // css={'width: 100% !important; height: 100% !important;'}
            />
          </Box>
        ))}
      </div>
    );
  };
  
  export default Gallery;