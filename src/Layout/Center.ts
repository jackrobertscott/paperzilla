import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface CenterProps {
  // props...
}

export const $Center: FC<CenterProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
