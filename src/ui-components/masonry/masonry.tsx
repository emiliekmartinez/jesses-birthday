/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';

import MainContainer from '../container/container';

import { Box, Flex, CardProps } from 'rebass';
import Card from '../../components/cards/card';
import Link from '../link/link';

interface MasonryProps {
  data: {
    edges: [
      {
        node: {
          slug: string;
          metaTitle: string;
          metaDescription: {
            metaDescription: string;
          };
          image: {
            file: {
              url: string;
            };
          };
        };
      }
    ];
  };
  previousPagePath: any;
  nextPagePath: any;
}

const MasonryLayout: FC<MasonryProps & JSX.IntrinsicElements['div']> = ({
  className = '',
  id = '',
  data,
  previousPagePath,
  nextPagePath,
  ...rest
}) => {
  const gutter: number = 18;
  const elements = data.edges;

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
      const baseHeight = 450;
      const sizeMapping = {
        1: [7, 1], // elementNumber: [x, y]
        2: [3, 1],
        3: [5, 0.47],
        4: [5, 1],
        5: [5, 0.47]
      };

      const {
        node: { metaTitle, image, metaDescription, slug }
      } = element;
      const link = { slug };
      const paragraph = {
        paragraph: metaDescription.metaDescription
      };
      const whichSide = elementNumber => {
        let side: 'top' | 'left' | 'right' = 'left';
        if (elementNumber === 5) {
          side = 'right';
        }
        return side;
      };
      return (
        <Card
          key={i}
          title={metaTitle}
          primaryImage={image}
          paragraph={paragraph}
          link={link}
          className={`masonry-item`}
          m={gutter}
          width={[
            '100%',
            `calc((100% * ${sizeMapping[elementNumber][0]}/10) - ${gutter *
              2}px)`
          ]}
          height={['auto', `${sizeMapping[elementNumber][1] * baseHeight}px`]}
          mt={[gutter, i === 4 ? '-230px' : gutter]}
          color={'text'}
          maxTextLength={elementNumber === 2 ? 70 : 120}
          imageOn={
            elementNumber === 3 || elementNumber === 5
              ? whichSide(elementNumber)
              : 'top'
          }
        />
      );
    });

  const chunkedElements = chunk(elements, 5);
  const reactComponents = chunkedElements
    .map((chunk, i) => makeChildElements(chunk))
    .flat(3);

  return (
    <MainContainer>
      <Flex flexWrap="wrap" mx={`-${gutter}px`}>
        {reactComponents}
      </Flex>
      {(previousPagePath || nextPagePath) && (
        <Flex alignItems="center" justifyContent="center" width="100%" mt={4}>
          {previousPagePath && (
            <Link href={previousPagePath} emphasis={true} styledAs={false} data-gtm-link-track={`website-slug--${previousPagePath.replace('/', '')}`}>
              ⟨ Previous
            </Link>
          )}
          {nextPagePath && (
            <Link href={nextPagePath} emphasis={true} styledAs={false} ml={2} data-gtm-link-track={`website-slug--${nextPagePath.replace('/', '')}`}>
              Next ⟩
            </Link>
          )}
        </Flex>
      )}
    </MainContainer>
  );
};

export default MasonryLayout;
