import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface RichTextEditorProps {
  // props...
}

export const RichTextEditor: FC<RichTextEditorProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
