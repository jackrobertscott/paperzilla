import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface BreadcrumbProps {
  // props...
}

export const Breadcrumb: FC<BreadcrumbProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
