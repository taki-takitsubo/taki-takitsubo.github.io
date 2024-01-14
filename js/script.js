"use strict"


/* pc header */
let header = document.querySelector("header.pc");
let topMv = document.querySelector(".mv");
let subMv = document.querySelector(".sub_page_header")

if ( topMv != null) {
  let topMvHeight = topMv.offsetHeight;
  document.addEventListener("scroll",function(){
    let scrollHeight = window.scrollY;
    if( scrollHeight > topMvHeight - 80 ){
      header.style.background = "rgba(62,117,0,.7)";
      header.style.backdropFilter = "blur(8px)";
    } else{
      header.style.background = "none"
      header.style.backdropFilter = "none";
    }
  });
} else if ( subMv != null) {
  let subMvHeight = subMv.offsetHeight;
  document.addEventListener("scroll",function(){
    let scrollHeight = window.scrollY;
    if( scrollHeight > subMvHeight - 80 ){
      header.style.background = "rgba(62,117,0,.7)";
      header.style.backdropFilter = "blur(8px)";
    } else{
      header.style.background = "none";
      header.style.backdropFilter = "none";
    }
  });
};

/* loading */
let body = document.querySelector("body");
document.addEventListener("DOMContentLoaded",function(){
  body.classList.add("loaded");
})

/* fade */
let fadeObjects=document.querySelectorAll(".fade");
fadeObjects.forEach(function(fade){
  let windowHeight=window.innerHeight;
  window.addEventListener("scroll",function(){
    let rect=fade.getBoundingClientRect().top;
    let scroll=window.scrollY;
    let offset=rect+scroll;
    if(scroll>offset-windowHeight+200){
      fade.classList.add("fade_active");
    };
  });
});

  let takiblogListItem = document.querySelectorAll(".takiblog_list_item");
  console.log(takiblogListItem);