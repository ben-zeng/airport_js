function Airport(weather, capacity) {
    this.hanger = [];
    this.weather = typeof weather !== 'undefined' ? weather : new Weather();
    this.capacity = typeof capacity !== 'undefined' ? capacity : 5;
}

Airport.prototype.landPlane = function(plane) {
     if(this.weather.isStormy()) {
         throw new Error("Too stormy to land");
     }
     else if(this.isFull()) {
         throw new Error("Airport at max capacity");
     }
         this.hanger.push(plane);
};

Airport.prototype.takeOffPlane = function() {
    return this.hanger.pop();
};

Airport.prototype.isFull = function() {
    return (this.hanger.length === this.capacity)
};
