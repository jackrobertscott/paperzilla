import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface TextEditorProps {
  // props...
}

export const $TextEditor: FC<TextEditorProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
