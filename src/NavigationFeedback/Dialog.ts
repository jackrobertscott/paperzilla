import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface DialogProps {
  // props...
}

export const $Dialog: FC<DialogProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
