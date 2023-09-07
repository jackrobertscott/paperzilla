import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface DropdownSelectorProps {
  // props...
}

export const $DropdownSelector: FC<DropdownSelectorProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
