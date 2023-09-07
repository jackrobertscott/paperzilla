import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface PortalProps {
  // props...
}

export const Portal: FC<PortalProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
