import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';

import shoppingCartOutlined from '@iconify/icons-ant-design/shopping-cart-outlined';

const CartIcon = () => {
  return (
    <div className="cartClass">
      <Icon className="carticon" icon={shoppingCartOutlined} />
    </div>
  );
};
export default CartIcon;
