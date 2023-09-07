import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface TextAreaEditorProps {
  // props...
}

export const $TextAreaEditor: FC<TextAreaEditorProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
