import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface GraphProps {
  // props...
}

export const Graph: FC<GraphProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
