// This file is irrelevant


class Cont{
    constructor(x, y, n){
        this.x = 0;
        this.y = 0;
        this.slides = []

        let slid = new Slider(x, y, 160, 5, images)
        this.slides.push(slid)
        for (let o = 1; o<n;o++){
          let slidr = new Slider(slid.quads[slid.quads.length-1].x, slid.quads[slid.quads.length-1].y, 160, 5, images)
          slidr.hook = this.slides[o-1]
          this.slides.push(slidr);
        }
        this.slides[this.slides.length-1].loadpix()
    }

    update(){
        for (let r = 0; r<this.slides.length-1; r++){
            if (!this.slides[r].load){
            this.slides[r].loadpix()

            this.slides[r].load = true;
            this.slides[r].update()
            this.slides[r].move()
            } else {
            this.slides[r].update()
            this.slides[r].move()
            //fill(100)
            //circle(slids[r].quads[slids[r].quads.length-1].x, slids[r].quads[slids[r].quads.length-1].y, 10)
        
            }
            if (r > 1){
            this.slides[r].show()
            }
        
            
            
        }
        this.slides[this.slides.length-1].update()
        this.slides[this.slides.length-1].move()
        this.slides[this.slides.length-1].show()
    }
}
