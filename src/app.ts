if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    console.log('navigator.serviceWorker', navigator.serviceWorker);
    navigator.serviceWorker.register('/sw.js');

    navigator?.serviceWorker?.ready?.then(function (reg) {
      // There's an active SW, but no controller for this tab.
      if (reg?.active && !navigator.serviceWorker.controller) {
        // Perform a soft reload to load everything from the SW and get
        // a consistent set of resources.
        window.location.reload();
      }
    });
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  //   e.prompt();
  // Wait for the user to respond to the prompt
  e.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
  });
});
