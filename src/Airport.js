function Airport() {
    this.hanger = [];
}

Airport.prototype.landPlane = function(plane) {
    this.hanger.push(plane);
};

Airport.prototype.takeOffPlane = function() {
    return this.hanger.pop();
};
