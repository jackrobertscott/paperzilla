import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface TagProps {
  // props...
}

export const Tag: FC<TagProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
