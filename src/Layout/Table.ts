import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface TableProps {
  // props...
}

export const $Table: FC<TableProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
