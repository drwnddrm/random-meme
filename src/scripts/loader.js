const addLoader = (btn) => {
  btn.disabled = true;
  btn.textContent = 'жди мем';
}

const removeLoader = (btn) => {
  btn.disabled = false;
  btn.textContent = 'next мемас';
}

export {addLoader, removeLoader};