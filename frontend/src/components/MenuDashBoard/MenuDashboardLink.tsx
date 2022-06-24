import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { menuAnimation } from './menuAnimation';

interface iMenuLink {
  icon: string;
  value: {
    name: string;
    link: string;
  };
  refs: {
    menu: any;
    closeButton: any;
    MenuIcon: any;
  };
}

export const MenuDashboardLink = ({
  icon,
  value,
  refs,
}: PropsWithChildren<iMenuLink>): JSX.Element => {
  const [name, setName] = useState<string>('');

  const navigate = useNavigate();

  const handleMenuButtonClick = useCallback(() => {
    const { menu, closeButton, MenuIcon } = refs;
    menuAnimation(menu.current, closeButton.current, MenuIcon.current);
    navigate(`/${value.link}`, { replace: true });
  }, []);

  useEffect(() => {
    setName(value.name);
  }, [name]);

  return (
    <section className="dashboard-menu-item">
      <div
        className="dashboard-menu-link"
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={handleMenuButtonClick}
        onKeyDown={handleMenuButtonClick}
        role="button"
        tabIndex={0}
      >
        <div className="icon-container-menu-item">
          <img src={icon} alt="" />
        </div>
        <div>{name}</div>
      </div>
    </section>
  );
};
