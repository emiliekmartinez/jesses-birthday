/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';

import { Box, Flex, Heading } from 'rebass';

import { Image } from '../../ui-components/images/images';
import MainContainer from '../../ui-components/container/container';

interface Props {
  className?: string;
  data: {
    id?: string;
    title: string;
    subtitle: {
      subtitle: string;
    };
    image: {
      fluid: {
        src: string;
      };
    };
    youTubeVideoShareUrl: string;
  };
  titleAs?: 'h1' | 'h2';
  subtitleAs?: 'h1' | 'h2';
  css?: any;
}

const VideoSection: FC<Props & JSX.IntrinsicElements['div']> = ({
  className = '',
  titleAs = 'h1',
  subtitleAs = 'h2',
  data,
  ...rest
}) => {
  const {
    title,
    subtitle,
    image,
    youTubeVideoShareUrl
  } = data;

  return (
    <Box bg={''}>
      <MainContainer flexWrap={['wrap', 'wrap', 'no-wrap']}>
        {title && (
          <Heading variant="heading" as="h2" flex="0 1 100%" maxWidth="100%">
            {title}
          </Heading>
        )}
        {subtitle && subtitle.subtitle && (
          <Heading
            variant="body"
            as="p"
            color="text"
            flex="0 1 100%"
            maxWidth="100%"
          >
            {subtitle.subtitle}
          </Heading>
        )}
        {image && !youTubeVideoShareUrl && (
          <Box width="100%" mt={3}>
            <Image src={image} />
          </Box>
        )}
        {youTubeVideoShareUrl && (
          <Box width="100%" flex="0 1 100%" maxWidth="100%" mt={3}>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */
              }}
            >
              <ReactPlayer
                url={youTubeVideoShareUrl}
                style={{ position: 'absolute', top: 0, left: 0 }}
                config={{
                  youtube: {
                    playerVars: { modestbranding: 1, rel: 0, controls: 1 }
                  }
                }}
                width="100%"
                height="100%"
                {...(image && { light: image, playing: true })}
              />
            </Box>
          </Box>
        )}
      </MainContainer>
    </Box>
  );
};

export default VideoSection;
