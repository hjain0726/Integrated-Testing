describe('This is factory suit', function () {
    var factory;
    beforeEach(module("myapp"));
    beforeEach(inject(_myfactory_ => {
        factory = _myfactory_;
    }));
    it('It shoud add two numbers', function () {
        var one = 100;
        var two = 100;
        var result = factory.add(one, two);
        expect(result).toBe(200);
    });
    it('It shoud add two string', function () {
        var result = factory.add("100", "100");
        expect(result).toBe(200);
    });
    it('It shoud add one number', function () {
        var result = factory.add(100);
        expect(result).toBe(100);
    });
    it('It shoud add no number', function () {
        var result = factory.add();
        expect(result).toBe(0);
    });
});