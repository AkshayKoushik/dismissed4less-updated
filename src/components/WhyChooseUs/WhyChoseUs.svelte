<script>
import { onMount } from 'svelte';

  onMount(() => {
    window.addEventListener('load',function(){
      var slideIndex = 0;
      showSlides();

      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
      }
      });

      function clickEffect(e){
        var d=document.createElement("div");
        d.className="clickEffect";
        d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
        document.body.appendChild(d);
        d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
      }
      document.addEventListener('click',clickEffect);
  })


</script>

<style>
* {box-sizing: border-box;}
.mySlides {display: none;}
img {vertical-align: center;}

.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  /* background-color: #bbb; */
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}


/* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

  #bg {
    position: relative; 
    width: 100%; 
    height: 100%;
  }
  .bg-image {
  background-repeat: no-repeat; 
  background-size: auto;
  float: left;
  width: 100%;
  height: auto;
  /* position: fixed; */
  top:  0%;
  right: 0%;
  }
.mySlides.fade img{
  position: fixed;
  left: 35%;
  margin-top: 5%;
  cursor: pointer auto;	
}
</style>

<section>
<img class="bg-image" src="./whyChooseUs/TRUCKWITHROADANDBANNER.png" alt="">
  <div id="bg">
    <div class="mySlides fade">
     <img src="./whyChooseUs/Court.svg" alt=" " style="width:3%">
    </div>

    <div class="mySlides fade">
      <img src="./whyChooseUs/Hammer.png" alt=" " style="width:3%">
    </div>

     <div class="mySlides fade">
      <img src="./whyChooseUs/Court.svg" alt=" " style="width:3%">
    </div>

<br>

  <div style="text-align:center">
    <span class="dot"></span> 
    <span class="dot"></span> 
    <span class="dot"></span> 
  </div>
</div>


  
</section>