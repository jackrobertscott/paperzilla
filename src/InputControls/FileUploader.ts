import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface FileUploaderProps {
  // props...
}

export const FileUploader: FC<FileUploaderProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
