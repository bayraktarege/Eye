class Slider{
    constructor(x, y, len, sc, images){
        this.sc = sc
        this.len = len
        this.size = this.len / this.sc;
        this.quads = [];
        //this.vel = 0;
        this.x = 0;
        this.y = 0;
        this.pos = createVector(x,y);
        this.b = true;
        this.dupl = false;
        this.images = images;
        this.img = random(this.images);
        this.img2 = random(this.images);
        this.imagArray1 = [];
        this.imagArray2 = [];
        this.imagArray3 = [];
        this.w = 0.01//random(-0.01, 0.01); // 0.1
        this.f = random(TWO_PI);
        this.t = 0
        this.row = floor(random(64))
        this.switch = 0;
        this.load = false;
        this.spitze = floor(random(1,11));
        this.hook = null
        //console.log(img)
        for (let i = 0; i<=this.size; i++){
            let vec = createVector(x+i*this.sc, y)
            this.quads.push(vec)
            //this.spitze = vec
        }
        this.top = this.quads[-1];
        

        //console.log(this.imagArray1)
        //this.quads.pop()

    }
    loadpix(){
        for (let k = 0; k<=this.quads.length-1; k++){
            //et pixels = this.img.get(k);
            //console.log(pixels))
            //let ind = k + this.row * 640;
            let col = this.img.get(k, this.row)//pixels[ind]
            //console.log(col)
            //console.log(col2)
            this.imagArray1.push(col)
            if(this.hook == null){
                let col2 = this.img2.get(k, this.row)//pixels[ind]
                this.imagArray2.push(col2)
            }
           
        }
    }
    update(){
        this.updateImages()
        //if (this.switch%this.spitze == 0){
        //    this.updateImages()
        //}
        

        this.rotate()
        //this.show()
        //this.move()
        //this.switch += 1;

    }

    rotate(){
        this.f += this.w;
        this.t += this.w;
        for (let i = 0; i < this.quads.length; i++){
            this.quads[i].x = this.pos.x + cos(this.f) * this.sc * i
            this.quads[i].y = this.pos.y + sin(this.f) * this.sc * i
        }
       
        //point = createVector(point.x, point.y)
    
    }

    move(){
        if(this.hook==null){
            return
        } else {
            this.pos.x = this.hook.quads[this.quads.length-1].x
            this.pos.y = this.hook.quads[this.quads.length-1].y
            //this.speed = sin(this.hook.w) * this.hook.l;
            
        }
    }

    updateImages(){
        this.imagArray1.splice(this.imagArray1.length-1, 1)
        if (this.imagArray2.length == 0 && this.hook == null){
            this.row = floor(random(64));
            this.img2 = random(images)
            for (let k = 0; k<=this.quads.length-1; k++){
                //et pixels = this.img.get(k);
                //console.log(pixels))
                //let ind = k + this.row * 640;
                let color2 = this.img2.get(k, this.row)//pixels[ind]
                this.imagArray2.push(color2)
            }
            

        } else if(this.hook != null) {
            this.imagArray2.splice(0,0,this.hook.imagArray1[this.hook.imagArray1.length-1])

        }
        this.imagArray1.splice(0,0,this.imagArray2[this.imagArray2.length-1])
        this.imagArray2.splice(this.imagArray2.length-1,1)
        
    }
    

    show(){
        for (let k = 0; k<this.quads.length-1; k++){
            //et pixels = this.img.get(k);
            //console.log(pixels))
            //let ind = k + this.row * 640;
            let color = this.imagArray1[k]//pixels[ind]
            //console.log(color)
            extraCanvas.strokeWeight(1)
            //extraCanvas.stroke(0)
            //extraCanvas.stroke(0,0,0, 20)
            //fill(0)
            //noStroke()
            //extraCanvas.line(this.quads[k].x, this.quads[k].y,this.quads[k+1].x, this.quads[k+1].y);
            //if (this.f<TWO_PI){
            //    extraCanvas.stroke(color[0],color[0],color[1], color[3]/(k+1))
            //} else if (this.t >PI){
            //    extraCanvas.stroke(color[1],color[2],color[1], color[3]/(k+1))
            //} else {
            //    extraCanvas.stroke(color[1],color[3],color[2], color[3]/(k+1))
            //}
            //extraCanvas.stroke(color[2],color[1],color[2], color[3]/(k/2.2+1))
            //extraCanvas.stroke(color[0],color[1],color[2], color[3]/(k/1.3+1))
            extraCanvas.fill(color[2],color[1],color[2], color[0]/(k/1.7+1))
            extraCanvas.noStroke()
            //extraCanvas.line(this.quads[k].x, this.quads[k].y,this.quads[k+1].x, this.quads[k+1].y);
            extraCanvas.circle(this.quads[k].x, this.quads[k].y, 3);

        }
    }

}