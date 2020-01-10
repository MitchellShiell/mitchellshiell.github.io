

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("main").style.marginTop = "100%";
    document.getElementById("header").style.marginTop = "100%";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.height = "0%";
    document.getElementById("main").style.marginTop = "0%";
    document.getElementById("header").style.marginTop = "0%";
  
  } 
  
  function openLeftNav() {
    document.getElementById("myLeftSidenav").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("leftHeader").style.marginLeft = "25%";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeLeftNav() {
    document.getElementById("myLeftSidenav").style.width = "0%";
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("leftHeader").style.marginLeft = "0%";
  }
  
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-48px";
    }
    prevScrollpos = currentScrollPos; 
  }


  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };