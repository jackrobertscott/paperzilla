import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface HeadingProps {
  // props...
}

export const Heading: FC<HeadingProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
