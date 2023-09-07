import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface TabsProps {
  // props...
}

export const $Tabs: FC<TabsProps> = ({}) => {
  return $('div', {
    className: css({
      // code...
    })
  });
};
