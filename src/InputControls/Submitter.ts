import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface SubmitterProps {
  // props...
}

export const $Submitter: FC<SubmitterProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
