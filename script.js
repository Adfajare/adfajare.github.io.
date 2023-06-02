document.getElementById("get-started-button").addEventListener("click", function() {
    document.getElementById("landing-page").style.display = "none";
    document.getElementById("slide-1").classList.add("active");
  });
  
  document.getElementById("slide-1").addEventListener("click", function() {
    document.getElementById("slide-1").classList.remove("active");
    document.getElementById("slide-2").classList.add("active");
  });
  
  document.getElementById("slide-2").addEventListener("click", function() {
    document.getElementById("slide-2").classList.remove("active");
    // ... tambahkan logika atau perpindahan ke slide berikutnya di sini ...
  });
 
  window.addEventListener('scroll', function() {
    var slide1 = document.getElementById('slide-1');
    var footer = document.getElementById('footer');

    if (isElementInViewport(slide1)) {
      footer.style.display = 'none';
    } else {
      footer.style.display = 'inline-block';
    }
  });

  // Fungsi untuk mengecek apakah elemen berada dalam viewport
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }