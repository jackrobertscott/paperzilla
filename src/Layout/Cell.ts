import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface CellProps {
  // props...
}

export const $Cell: FC<CellProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
