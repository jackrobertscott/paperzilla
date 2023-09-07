import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface MenuProps {
  // props...
}

export const $Menu: FC<MenuProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
