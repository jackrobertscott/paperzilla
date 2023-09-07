import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface DrawerProps {
  // props...
}

export const $Drawer: FC<DrawerProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
