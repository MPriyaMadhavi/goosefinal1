class Security1 {

    constructor(){
 
        this.access6 = createInput("Code1")
        this.access6.position(300,90);
        this.access6.style('background', 'white');  

        this.button6 = createButton('Check');
        this.button6.position(300,120);
        this.button6.style('background', 'lightgrey');    

        this.access7 = createInput("Code2")
        this.access7.position(300,190);
        this.access7.style('background', 'white');  

        this.button7 = createButton('Check');
        this.button7.position(300,220);
        this.button7.style('background', 'lightgrey');

       
    }

    display(){
        this.score=0;
        this.button6.mousePressed(() => {
            if(security.authenticate(accessCode6,this.access6.value())){
                this.button6.hide();
                this.access6.hide();
                this.score++;
                console.log(this.score)
        //         textSize(20);
        // fill("white");
        // text("Score: " +this.score, 450, 50);
            }
        });

        this.button7.mousePressed(() => {
            if(security.authenticate(accessCode7,this.access7.value())){
                this.button7.hide();
                this.access7.hide();
                this.score++;

                console.log(this.score)
                textSize(20);
                fill("white");
                text("Score: " +this.score, 450, 50);
                if(this.score === 2) {
                    clear()
                   background("lightblue");
                 image(youwinImg,250,200,100,100)
                                }
            }
        });

        
  
    }


 authenticate(actualCode,enteredCode){
    textSize(50);
    fill("black");
    // text(code,300,300)
    if(actualCode === enteredCode.toUpperCase()) 
        return true
    else
        return false
}


}