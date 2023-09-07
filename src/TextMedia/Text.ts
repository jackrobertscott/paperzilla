import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface TextProps {
  // props...
}

export const Text: FC<TextProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
