import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface SpinnerProps {
  // props...
}

export const Spinner: FC<SpinnerProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
