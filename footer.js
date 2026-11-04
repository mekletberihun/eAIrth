const footerPlaceholder = document.querySelector("[data-footer-placeholder]");

if (footerPlaceholder) {
  fetch("../footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Footer request failed: ${response.status}`);
      }
      return response.text();
    })
    .then((footerMarkup) => {
      footerPlaceholder.innerHTML = footerMarkup;
    })
    .catch((error) => {
      console.error("Could not load the shared footer.", error);
    });
}
