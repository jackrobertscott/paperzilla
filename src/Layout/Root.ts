import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface RootProps {
  // props...
}

export const Root: FC<RootProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
