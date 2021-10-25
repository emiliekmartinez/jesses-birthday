/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/react';

import { graphql } from 'gatsby';

import {
  Link as RebassLink,
  Button,
  LinkProps as RebassLinkProps,
  ButtonProps
} from 'rebass';

export const query = graphql`
  fragment Links on ContentfulLinkButton {
    id
    styledAs
    emphasis
    slug
    visibleText
    newTab
    internal {
      type
    }
  }
`;

export interface LinkProps extends RebassLinkProps {
  id?: string;
  disabled?: boolean;
  styledAs?: boolean;
  emphasis?: boolean;
  slug?: string;
  newTab?: boolean;
  visibleText?: string;
  plain?: boolean;
  variant?: 'primaryLink' | 'secondaryLink' | 'plainLink' | 'tab' | '';
}

const Link: FC<JSX.IntrinsicElements['a'] & LinkProps & ButtonProps> = ({
  children,
  styledAs,
  emphasis,
  slug,
  newTab,
  plain = false,
  variant,
  ...rest
}) => {

  const getVariant = () => {
    if (variant === null || variant === '') {
      variant = 'primaryLink'
    } else if (!emphasis && !plain) {
      variant = 'secondaryLink';
    } else if (!emphasis && plain) {
      variant = 'plainLink';
    }
    return variant;
  };

  return styledAs || plain ? (
    <RebassLink
      href={slug}
      variant={variant || getVariant()}
      {...(newTab && { target: '_blank', rel: 'noreferrer' })}
      data-gtm-link-track={`website-slug--${slug.replace('/', '')}`}
      {...rest}
    >
      {children}
    </RebassLink>
  ) : (
    <Button
      as="a"
      href={slug}
      variant={variant || emphasis ? 'primary' : 'secondary'}
      {...(newTab && { target: '_blank', rel: 'noreferrer' })}
      data-variant={variant}
      data-gtm-button-track={
        slug ? `website-slug--${slug.replace('/', '')}` : 'empty-link'
      }
      {...rest}
    >
      {children}
    </Button>
  );
};

export default Link;
