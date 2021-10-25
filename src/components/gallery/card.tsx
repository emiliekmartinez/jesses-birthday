/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import {
  Box,
  Card as RebassCard,
  CardProps as RebassCardProps,
  Heading,
  Flex,
  Text
} from 'rebass';
import { LinkProps } from '../../ui-components/link/link';
import { Image } from '../../ui-components/images/images';

export interface CardProps extends RebassCardProps {
  id?: string;
  title?: string;
  paragraph?: {
    paragraph?: string;
  };
  attribution?: string;
  primaryImage?: any;
  imageOn?: 'top' | 'left' | 'right';
}

const Card: FC<CardProps & JSX.IntrinsicElements['a']> = ({
  className = '',
  id = '',
  title,
  paragraph,
  attribution,
  primaryImage,
  imageOn = 'top',
  ...rest
}) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const imageOnToFlex = imageOn => {
    let flexDirection = 'row';
    if (imageOn === 'right') {
      flexDirection = 'row-reverse';
    }
    return flexDirection;
  };

  const mobileMaxHeight = () => {
    let maxHeight = 'unset';

    if (imageOn === 'left' || imageOn === 'right') {
      maxHeight = '600px';
    }
    return maxHeight;
  }

  if (isFlipped && paragraph) {
    return (
      <RebassCard
        key={id}
        as="div"
        variant="card"
        sx={{
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          textDecoration: 'none',
          overflow: 'scroll',
          maxHeight: [mobileMaxHeight(), 'unset', 'unset'],
          
        }}
        onClick={() => setIsFlipped(!isFlipped)}
        {...rest}
      >
        <Text sx={{ padding: '30px', flexBasis: '100%' }}>
          {paragraph}
        </Text>
        {attribution && (
          <Text sx={{ padding: '30px', flexBasis: '100%' }}>
            <Box>❤️,</Box>
            {attribution}
          </Text>
        )}
      </RebassCard>
    )
  }

  return (
    <RebassCard
      key={id}
      as="div"
      variant="card"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection:
          imageOn === 'left' || imageOn === 'right'
            ? imageOnToFlex(imageOn)
            : 'column',
        textDecoration: 'none',
        overflow: 'hidden',
        maxHeight: [mobileMaxHeight(), 'unset', 'unset']
      }}
      onClick={() => setIsFlipped(!isFlipped)}
      {...rest}
    >
      {paragraph && (<Box sx={{ position: "absolute", top: '20px', left: '20px', bg: '#000', color: 'white', padding: '10px', zIndex: '100'}}>Click me!</Box>)}
      <Image
        src={primaryImage}
        style={{
          flexShrink: 0,
          minHeight: '600px',
          maxHeight: imageOn === 'top' ? '650px' : 'none',
          width: imageOn !== 'top' ? '100%' : 'unset'
        }}
        className=''
      />
    </RebassCard>
  )
}

export default Card;
