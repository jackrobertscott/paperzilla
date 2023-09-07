import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface PageProps {
  // props...
}

export const $Page: FC<PageProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
