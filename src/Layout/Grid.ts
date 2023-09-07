import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface GridProps {
  // props...
}

export const Grid: FC<GridProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
