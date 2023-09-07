import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface ExpanderProps {
  // props...
}

export const Expander: FC<ExpanderProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
