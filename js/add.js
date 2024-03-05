window.addEventListener("scroll", function () {
    shrink();
  });
  
  let header = document.getElementById("header");
  
  function shrink() {
    if (scrollY >0) {
      header.classList.add("header-shrink");
    } else {
      header.classList.remove("header-shrink");
      }
  };
  
  window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 100
    ) {
      backtop.classList.add("backtop-show");
    } else {
      backtop.classList.remove("backtop-show");
    }
  }