import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface VideoProps {
  // props...
}

export const $Video: FC<VideoProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
