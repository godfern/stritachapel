let mainmenu = document.querySelector(".mainmenu");
let menuBlock = document.querySelector("ul.main-menu-items");
let menuBtn = document.querySelector(".responsive-nav-btn");
let docBtn = document.querySelector("#docs1");
// let docBtn2 = document.querySelector("#docs2");
let docBtn3 = document.querySelector("#docs3");
let docBlock = document.querySelector(".doc-block");
// let docBlock2 = document.querySelector(".doc-block2");
let docBlock3 = document.querySelector(".doc-block3");
let closeBtn = document.querySelector(".btn1");
// let closeBtn2 = document.querySelector(".btn2");
let closeBtn3 = document.querySelector(".btn3");


let w = window.innerWidth;
let h = window.innerHeight;

menuBtn.addEventListener('click',event => {
    menuBlock.classList.toggle('main-menu-items-show');
    mainmenu.classList.toggle('main-menu-toggle');
})

docBtn.addEventListener('click',event => {
    docBlock.classList.toggle('doc-show')
})

// docBtn2.addEventListener('click',event => {
//     docBlock2.classList.toggle('doc-show')
// })

docBtn3.addEventListener('click',event => {
    docBlock3.classList.toggle('doc-show')
})

closeBtn.addEventListener('click',event => {
    docBlock.classList.toggle('doc-show')
})

// closeBtn2.addEventListener('click',event => {
//     docBlock2.classList.toggle('doc-show')
// })

closeBtn3.addEventListener('click',event => {
    docBlock3.classList.toggle('doc-show')
})


document.querySelectorAll(".main-menu-items a[name=menu-item]").forEach(item => {
    item.addEventListener('click', event => {
        // menuBlock.style.height = "0px";
        menuBlock.classList.toggle('main-menu-items-show');
        mainmenu.classList.toggle('main-menu-toggle');
    })
})

if(w > 600){
    $('.radiate').radiate({
		angle:function(ul,i){			
			if(i<3)
				return i*45
			else
				return i*45+35
		},
		offset:-15,
		toggle:'#toggle'
	});
}



/***********Lazy load images***********/
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })