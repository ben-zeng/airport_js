describe("Weather", function(){
    let weather;

    beforeEach(function() {
        weather = new Weather();
    });

    describe("#isStormy", function() {
        it ("returns true if stormy", function() {
            spyOn(weather,"isStormy").and.returnValue(true)
            expect(weather.isStormy()).toBeTruthy();
        });

        it ("returns false if not stormy", function() {
            spyOn(weather,"isStormy").and.returnValue(false)
            expect(weather.isStormy()).toBeFalsy();
        });
    });

});