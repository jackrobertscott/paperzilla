import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface AudioProps {
  // props...
}

export const $Audio: FC<AudioProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
