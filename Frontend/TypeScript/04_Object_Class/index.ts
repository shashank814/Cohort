class Music {
    constructor(public name: string, public artist: string, public thumbnail: string = "thumbnail.png", public length: number) {
        if(!thumbnail) {
            this.thumbnail = "something.jpg";
        }
    }
}

let m1 = new Music("Chak de India", "Benny", "", 1200);
m1.artist = "raj"
console.log(m1) 

class BottleMaker {
    public name;
    constructor(name: string) {
        this.name = name;
    }
}
let b1 = new BottleMaker("milton")