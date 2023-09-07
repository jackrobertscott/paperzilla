import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface NestedListProps {
  // props...
}

export const NestedList: FC<NestedListProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
