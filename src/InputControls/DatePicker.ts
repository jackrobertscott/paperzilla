import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface DatePickerProps {
  // props...
}

export const $DatePicker: FC<DatePickerProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
