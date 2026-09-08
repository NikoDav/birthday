const icons = document.querySelectorAll('.desktop-icon');
const windows = document.querySelectorAll('.window');
const taskItem = document.querySelector('.task-item');
const songButtons = document.querySelectorAll('.song-option');
const spotifyEmbed = document.getElementById('spotify-embed');

function activateWindow(name) {
  windows.forEach((win) => {
    const shouldOpen = win.dataset.windowPanel === name;
    win.classList.toggle('open', shouldOpen);
  });

  const activeTitle = document.querySelector(`[data-window="${name}"] .icon-label`)?.textContent || 'Window';
  taskItem.textContent = activeTitle;
}

songButtons.forEach((button) => {
  button.addEventListener('click', () => {
    songButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    if (spotifyEmbed && button.dataset.track) {
      spotifyEmbed.src = button.dataset.track;
    }
  });
});

icons.forEach((icon) => {
  icon.addEventListener('dblclick', () => {
    const target = icon.dataset.window;
    activateWindow(target);
  });

  icon.addEventListener('click', () => {
    const target = icon.dataset.window;
    activateWindow(target);
  });
});

windows.forEach((win) => {
  const closeButton = win.querySelector('.close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      win.classList.remove('open');
    });
  }
});
