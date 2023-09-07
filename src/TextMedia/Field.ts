import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface FieldProps {
  // props...
}

export const Field: FC<FieldProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
