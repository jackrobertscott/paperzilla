import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface AvatarProps {
  // props...
}

export const $Avatar: FC<AvatarProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
