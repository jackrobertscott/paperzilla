import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface BottomNavProps {
  // props...
}

export const $BottomNav: FC<BottomNavProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
