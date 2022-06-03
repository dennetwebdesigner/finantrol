import { MouseEvent, MutableRefObject } from 'react';

export const modal_close_animation = (
  e: MouseEvent,
  parentModalEl: MutableRefObject<any>,
): void => {
  const modal = parentModalEl.current;
  modal.style.transition = '.5s';
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500);
};

// function responsible for apen modal
export const modal_open_animation = (modalEl: MutableRefObject<any>): void => {
  // modal element ref set transition style
  modalEl.current.style.transition = '.5s';

  // modal element ref set display flex
  modalEl.current.style.display = 'flex';

  // delays animation fade in
  setTimeout(() => {
    modalEl.current.style.opacity = 1;
  }, 500);
};
