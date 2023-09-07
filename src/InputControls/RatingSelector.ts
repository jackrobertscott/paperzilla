import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface RatingSelectorProps {
  // props...
}

export const $RatingSelector: FC<RatingSelectorProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
