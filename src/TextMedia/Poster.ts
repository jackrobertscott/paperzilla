import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface PosterProps {
  // props...
}

export const Poster: FC<PosterProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
