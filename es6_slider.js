  window.onload = function(){
    class Slider {
      constructor(name){
       this.name = name;
       this.init();
      }
      init() {
       this.wrapsElements();
       this.navs();
      }
      arrow (){
       return  {
        next: '<a href="" class="btn_next">></a>',
        prev: '<a href="" class="btn_prev"><</a>',
       }
      }
      navs(){
       let arrows = this.arrow();
           this.name.insertAdjacentHTML('afterbegin',arrows.next);
           this.name.insertAdjacentHTML('afterbegin',arrows.prev);
           this.nextSlide();
           this.prevSlide();
      }
      createWrapper() {
       let sliderLine = document.createElement('div');
           sliderLine.classList.add('slider_line');
           sliderLine.style.height = '100%';
           sliderLine.style.display='flex';
           sliderLine.style.position="absolute";
           sliderLine.style.transition = '1s';
           sliderLine.style.left="0";
           sliderLine.style.top = "0";
       return sliderLine;
      }
      wrapsElements(){
       let wrapper = this.createWrapper();
          [...this.name.children].map((elem)=>{wrapper.append(elem)});
          this.name.append(wrapper);
       return wrapper;
      }
     
      nextSlide(){
        this.name.querySelector('.btn_next').onclick = (e)=>{
         e.preventDefault();
        let [,,slider_line] = [...this.name.children];
        let count_slides = [...slider_line.children].length;
        let slider_line_left = slider_line.style.left;
        if(parseInt(slider_line_left)> -slider_line.offsetWidth+slider_line.offsetWidth/count_slides)
        slider_line.style.left=parseInt(slider_line_left)-slider_line.offsetWidth/count_slides+'px';
       }
      }
      prevSlide(){
        this.name.querySelector('.btn_prev').onclick = (e)=>{
         e.preventDefault();
        let [,,slider_line] = [...this.name.children];
        let count_slides = slider_line.children.length;
        let slider_line_left = slider_line.style.left;
        if(parseInt(slider_line_left)<0){
         slider_line.style.left=parseInt(slider_line_left)+slider_line.offsetWidth/count_slides+'px';
        }
       }
      }
      
    };



   // create new slider
   const slider = document.querySelector('#slider');
   const myNewSlider = new Slider(slider);
  }
