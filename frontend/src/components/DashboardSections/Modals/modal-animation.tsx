export const modal_close_animation = (e, parentModalEl) => {
  const modal = parentModalEl.current;
  console.log(modal);
  modal.style.transition = '.5s';
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500);
};

export const modal_open_animation = (e, modalEl, className) => {
  const new_mk = e.target;
  if (new_mk.classList.contains(className)) {
    modalEl.current.style.transition = '.5s';

    modalEl.current.style.display = 'flex';

    setTimeout(() => {
      modalEl.current.style.opacity = 1;
    }, 500);
  }
};
