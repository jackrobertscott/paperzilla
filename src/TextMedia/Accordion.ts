import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface AccordionProps {
  // props...
}

export const Accordion: FC<AccordionProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
