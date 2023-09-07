import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface LabelProps {
  // props...
}

export const $Label: FC<LabelProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
