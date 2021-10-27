import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../ui-components/layout';
import { Heading, Text, Button } from 'rebass';
import ImageGallery from '../components/gallery/galleryComponent';
import MainContainer from '../ui-components/container/container';
import ImageVideoSection from '../components/video/video';

interface PageProps {
  data: {
    contentfulJessePage: {
      id: number;
      metaTitle: string;
      metaDescription: string;
      slug: string;
      metaImage: {
        file: {
          url: string;
        };
      };
      heading: string;
      subheading: {
        subheading: string;
      };
      imageGallery: [];
    };
  };
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulJessePage(slug: { eq: $slug }) {
      id
      metaTitle
      metaDescription
      metaImage {
        file {
          url
        }
      }
      slug
      heading
      subheading {
        subheading
      }
      imageGallery {
        ...ImageGallery
      }
    }
  }
`;

export default class Page extends React.Component<PageProps, {}> {
  public render() {
    const { data } = this.props as PageProps;
    const {
      metaTitle,
      metaDescription,
      metaImage,
      slug,
      heading,
      subheading: { subheading },
      imageGallery
    } = data.contentfulJessePage;


    const components = {
      ContentfulImageVideoSection: ImageVideoSection,
      ContentfulTextSection: Text
    };

    // @ts-ignore
    const ComponentMatch = data => {
      // @ts-ignore
      const MatchingComponent = components[data.internal.type];
      return <MatchingComponent data={data} />;
    };

    return (
      <Layout>
        <main>
          <MainContainer>
            <Text as='h1' css={{ fontSize: '2.6em', fontFamily: 'sans-serif', fontWeight: 'bold', width: '100%'}} >{heading}</Text>
            <Text width='50%'>{subheading}</Text>
          </MainContainer>
          <ImageGallery data={imageGallery} />
          <MainContainer>
            <Button as='a' m='30px 0' href='/baeo' color='white' bg='black' css={{ borderRadius: '0', fontFamily: 'sans-serif', fontSize: '2em'}}>If you've made it this far, click here</Button>
          </MainContainer>
        </main>
      </Layout>
    );
  }
}
