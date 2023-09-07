import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface IconBarProps {
  // props...
}

export const IconBar: FC<IconBarProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
