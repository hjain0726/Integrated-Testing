describe('This is controller suit', function () {
    var $controller;
    var myscope = {};
    beforeEach(module('myapp'));
    beforeEach(inject(_$controller_ => {
        $controller = _$controller_;
        $controller('myctrl', { $scope: myscope });
    }));
    it('It should add two numbers', function () {
        myscope.firstnumber = 100;
        myscope.secondnumber = 100;
        myscope.show();
        expect(myscope.result).toBe(200);
    });
    it("It should add factory's two numbers", function () {
        myscope.print();
        expect(myscope.result2).toBe(300);
    });
});