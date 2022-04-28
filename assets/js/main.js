// let menuLink = document.querySelector(".main-menu-items a[name=menu-item]");
// menuLink.addEventListener("click", (event) => {
//     console.log("Button clicked.");
//   });

let mainmenu = document.querySelector(".mainmenu");
let menuBlock = document.querySelector("ul.main-menu-items");
let menuBtn = document.querySelector(".responsive-nav-btn");
let w = window.innerWidth;
let h = window.innerHeight;

menuBtn.addEventListener('click',event => {
    menuBlock.classList.toggle('main-menu-items-show');
    mainmenu.classList.toggle('main-menu-toggle');
    // menuBlock.style.setProperty('height', 'calc(100vh - 50px)');
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