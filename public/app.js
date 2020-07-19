(async () => {
  if (navigator.serviceWorker) {
    const registrations = await navigator.serviceWorker.getRegistrations();

    for (const registration of registrations) {
      registration.unregister();
    }
  }
})();
