import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface MatrixProps {
  // props...
}

export const $Matrix: FC<MatrixProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
