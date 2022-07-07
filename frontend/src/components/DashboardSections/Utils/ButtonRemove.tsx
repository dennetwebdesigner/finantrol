import React from 'react';

import { trash } from '../../../assets/img/icons';

interface iProps {
  where: string;
  identification: number;
  controller: any;
}

export const ButtonRemove = ({
  where,
  identification,
  controller,
}: iProps): JSX.Element => {
  const handleClickRemove = () => {
    controller(identification);
  };

  return (
    <button className="btn-action-item" onClick={handleClickRemove}>
      <img src={trash} alt={`button remove ${where}`} />
    </button>
  );
};
