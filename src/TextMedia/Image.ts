import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface ImageProps {
  // props...
}

export const Image: FC<ImageProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
