(function() {
  "use strict";
  
  const allEl = document.getElementsByClassName("prevDef"),
        allModal = document.getElementsByClassName("modal"),
        openBtn = document.getElementsByClassName("modal-btn"),
        closeBtn = document.getElementsByClassName("modal_close"),
        overlay = document.getElementsByClassName("modal_overlay");
  
  var arr = [],
      ind = 900;

  // Make elements prevent their default behaviour
  Array.prototype.map.call(allEl, (el) => {
    return el.addEventListener("click", (evt) => {
       evt.preventDefault();
    });
  });
  
  function showModal() {   
     Array.prototype.map.call(openBtn, (el) => {
      return el.addEventListener("click", function() {
        if(arr.indexOf(el.getAttribute("data-modal-target")) < 0) {
          arr.push(el.getAttribute("data-modal-target"));
        }

        let targetId = el.getAttribute("data-modal-target");
        document.getElementById(targetId).classList.add("show");
        document.getElementById(targetId).style.zIndex = ind++;
      });  
    });
  }
  
  Array.prototype.map.call(overlay, (el) => {
    return el.addEventListener("click", function() {  
      let targetId = el.parentNode.id;
      document.getElementById(targetId).classList.remove("show");
    });  
  }); 
 
  function hideModal() {
    Array.prototype.map.call(closeBtn, (el) => {
      return el.addEventListener("click", function() {
        let targetId = el.parentNode.parentNode.parentNode.id;
        document.getElementById(targetId).classList.remove("show"); 
      });
    });   
  }
  
  // for pressing ESC button
  document.addEventListener("keydown", (e) => {    
    if(e.keyCode === 27){
      // checks if it has been pop or not

      console.log(arr[arr.length - 1])
      if(document.getElementById(arr[arr.length - 1]).classList.contains("show") ) {
        document.getElementById(arr[arr.length - 1]).classList.remove("show");
        arr.pop()
      }
    }
  });
  
  hideModal();
  showModal();
})();