import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface DropZoneHandlerProps {
  // props...
}

export const $DropZoneHandler: FC<DropZoneHandlerProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
