import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface ListProps {
  // props...
}

export const List: FC<ListProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
