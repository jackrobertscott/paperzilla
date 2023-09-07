import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface ImageSelectorProps {
  // props...
}

export const ImageSelector: FC<ImageSelectorProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
