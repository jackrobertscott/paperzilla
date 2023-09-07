import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface ToastProps {
  // props...
}

export const $Toast: FC<ToastProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
