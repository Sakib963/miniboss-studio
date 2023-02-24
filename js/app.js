function smoothScroll(event) {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  }
  