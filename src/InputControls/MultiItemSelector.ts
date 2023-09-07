import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface MultiItemSelectorProps {
  // props...
}

export const $MultiItemSelector: FC<MultiItemSelectorProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
