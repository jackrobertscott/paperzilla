import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface ColumnProps {
  // props...
}

export const $Column: FC<ColumnProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
