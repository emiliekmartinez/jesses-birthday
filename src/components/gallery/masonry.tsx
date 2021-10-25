/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';

import MainContainer from '../../ui-components/container/container';

import { Box, Flex, CardProps } from 'rebass';
import Card from './card';

interface MasonryProps {
  data: [ {
		image: {
			file: {
				url: string;
			};
		};
		caption?: string;
		attribution?: string;
		aspectRatio: string;
	}];
}

const MasonryLayout: FC<MasonryProps & JSX.IntrinsicElements['div']> = ({
  className = '',
  id = '',
  data,
  ...rest
}) => {
  const gutter: number = 18;
  const elements = data;

  const chunk = (array: any, size: number) => {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);

    return [head, ...chunk(tail, size)];
  };

  const makeChildElements = elements =>
    elements.map((element, i) => {
      const elementNumber = i + 1;
      const baseHeight = 500;
      const sizeMapping = {
        1: [6, 1], // elementNumber: [x, y]
        2: [4, 1],
        3: [4, 1],
        4: [6, 1],
      };

      const whichSide = elementNumber => {
        let side: 'top' | 'left' | 'right' = 'left';
        if (elementNumber === 5) {
          side = 'right';
        }
        return side;
      };

			const { caption, image, attribution, aspectRatio } = element;

      return (
        <Card
          key={i}
          primaryImage={image}
          paragraph={caption}
					attribution={attribution}
          className={`masonry-item`}
          m={gutter}
          width={[
            '100%',
            `calc((100% * ${sizeMapping[elementNumber][0]}/10) - ${gutter *
              2}px)`
          ]}
          height={['auto', `${sizeMapping[elementNumber][1] * baseHeight}px`]}
          mt={[gutter, i === 4 ? '-230px' : gutter]}
          imageOn={
            elementNumber === 3 || elementNumber === 5
              ? whichSide(elementNumber)
              : 'top'
          }
        />
      );
    });

  const chunkedElements = chunk(elements, 4);
  const reactComponents = chunkedElements
    .map((chunk, i) => makeChildElements(chunk))
    .flat(3);

  return (
    <MainContainer>
      <Flex flexWrap="wrap" mx={`-${gutter}px`}>
        {reactComponents}
      </Flex>
    </MainContainer>
  );
};

export default MasonryLayout;
