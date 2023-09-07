import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface IconProps {
  // props...
}

export const $Icon: FC<IconProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
