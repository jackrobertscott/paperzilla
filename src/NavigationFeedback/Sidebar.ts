import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface SidebarProps {
  // props...
}

export const Sidebar: FC<SidebarProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
