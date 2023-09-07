import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface PopOverProps {
  // props...
}

export const $PopOver: FC<PopOverProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
