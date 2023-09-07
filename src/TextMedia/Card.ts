import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface CardProps {
  // props...
}

export const $Card: FC<CardProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
