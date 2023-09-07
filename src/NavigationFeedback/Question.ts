import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface QuestionProps {
  // props...
}

export const $Question: FC<QuestionProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
