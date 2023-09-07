import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface BadgeProps {
  // props...
}

export const $Badge: FC<BadgeProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
