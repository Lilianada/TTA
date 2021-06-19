class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header class="header-items">
                
                <div class="logo">
                    <img src="images/TALKTOADA.svg" alt="Blog logo">
                </div>
        
                <nav class="navlinks">
                    <div class="nav-items">
                        <ul>
                            <li><a href="home.html" >Home</a></li>
                            <li><a href="index.html" >About</a></li>
                            <li><a href="work.html">Work</a></li>
                            <li>
                                <button onclick="myFunction()" class="dropbtn">Blog</button>
                                <div id="myDropdown" class="dropdown-content">
                                    <a href="/">Tech & Design</a>
                                    <a href="/">Lifestyle</a>
                                    <a href="/">Career</a>
                                </div>
                            </li>
                            <li><a href="shop.html" >Shop</a></li>
                        </ul>
                    </div>

                    <!-- New Hamburger -->
                    <div class="hamburger">
                        <div class="line line1"></div>
                        <div class="line line2"></div>
                        <div class="line line3"></div>
                    </div>
                </nav>
            </header>
        `
    }
}
customElements.define('my-header', myHeader)


const menu= document.querySelector (".hamburger");
const nav= document.querySelector (".navlinks");

menu.addEventListener("click", () => {   //this makes the hamburger change from the three lines to the times button,
 nav.classList.toggle("ham")             // when the selector ham is added in front of the lines.
})                                       //toggle means switch from one thing to another
   

class myFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer> 
                <div class="social">
                    <p>Connect with me on social media</p>
                </div>

                <div class="social-icons">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/lilian-ada-793033135/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>

                <div class="copyright">
                    <p>Copyright © 2021 TalktoAda | <a href="#">Privacy Policy</a>  | <a href="#">Terms & Conditions</a>
                    </p>
                </div>
                
            </footer>
        `
    }
}

customElements.define('my-footer', myFooter)


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }