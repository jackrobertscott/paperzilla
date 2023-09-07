import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface RowProps {
  // props...
}

export const $Row: FC<RowProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
