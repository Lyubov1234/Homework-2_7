container.onclick = function (event) {
    if (event.target.className != 'close') return;

    let message = event.target.closest('.message');
    message.remove();
  };