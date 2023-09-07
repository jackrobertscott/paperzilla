import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface CheckboxSelectorProps {
  // props...
}

export const $CheckboxSelector: FC<CheckboxSelectorProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
