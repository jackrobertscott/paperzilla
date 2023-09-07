import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface OverlayProps {
  // props...
}

export const Overlay: FC<OverlayProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
