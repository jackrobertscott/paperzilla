import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface SpacerProps {
  // props...
}

export const $Spacer: FC<SpacerProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
