import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface ProgressProps {
  // props...
}

export const $Progress: FC<ProgressProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
