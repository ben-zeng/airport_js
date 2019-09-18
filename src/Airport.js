// let weather;

function Airport(weather) {
    this.hanger = [];
    this.weather = typeof weather !== 'undefined' ? weather : new Weather()
}

Airport.prototype.landPlane = function(plane) {
     if(this.weather.isStormy()){
         throw new Error("Too stormy to land");
     }
     else
         this.hanger.push(plane);
}


Airport.prototype.takeOffPlane = function() {
    return this.hanger.pop();
};
