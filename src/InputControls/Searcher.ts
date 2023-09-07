import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface SearcherProps {
  // props...
}

export const Searcher: FC<SearcherProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
