<script>
// const myCarousel = new Carousel({
//       container: document.querySelector('.slider'),
//       items: document.querySelectorAll('.slider-item'),
//       autoplay: true,
//       autoplayTime: 3500
// });
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
} */

[type=radio] {
  display: none;
}

#slider {
  height: 45vw;
  position: relative;
  perspective: 600px;
  transform-style: preserve-3d;
}

#slider label {
  margin: auto;
  width: 30%;
  height: 100%;
  border-radius: 4px;
  position: absolute;
  left: 0; right: 0;
  cursor: pointer;
  transition: transform 0.5s ease;
}

#s1:checked ~ #slide3, #s2:checked ~ #slide5,
#s3:checked ~ #slide1,
#s5:checked ~ #slide3 {
  transform: translate3d(-130%,0,-200px);
  opacity: 0.2;
}

#s1:checked ~ #slide5, #s2:checked ~ #slide1,
#s3:checked ~ #slide2, #s4:checked ~ #slide3,
#s5:checked ~ #slide4 {
  transform: translate3d(-130%,0,-200px);
    opacity: 0.2;
}

#s1:checked ~ #slide2, #s2:checked ~ #slide3,
#s3:checked ~ #slide4, #s4:checked ~ #slide5,
#s5:checked ~ #slide1 {
  transform: translate3d(130%,0,-200px);
    opacity: 0.2;
}

#s1:checked ~ #slide3, #s2:checked ~ #slide4,
#s3:checked ~ #slide5, #s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
  transform: translate3d(130%,0,-200px);
    opacity: 0.2;
}

img{
    display: flex;
    padding-top: 50px;
    width: 400px;
    height: 400px;
}
</style>


<section id="slider" class="slider">
  <input type="radio" name="slider" id="s1" class="slider-item">
  <input type="radio" name="slider" id="s3" class="slider-item" checked>
  <input type="radio" name="slider" id="s5" class="slider-item" >


    <label for="s1" id="slide1">
    <img src="./imageCarousel/TESTIMONIAL SIGN BOARD.png" class="slider-item-img" alt="">
    </label> 

    <label for="s3" id="slide3" class="slider-item">
   <img src="./imageCarousel/TESTIMONIAL SIGN BOARD.png" class="slider-item-img" alt="">
    </label>

    <label for="s5" id="slide5" class="slider-item">
    <img src="./imageCarousel/TESTIMONIAL SIGN BOARD.png" alt="" class="slider-item-img">
    </label> 
</section>


