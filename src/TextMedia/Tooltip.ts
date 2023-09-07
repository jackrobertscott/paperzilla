import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface TooltipProps {
  // props...
}

export const $Tooltip: FC<TooltipProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
