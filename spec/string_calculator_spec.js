describe("Electron Game", function() {
    it("should return 0 for an empty array", function() {
        const result = Electrongame([]);
        expect(result).toBe(0);
    });
    describe("Electron Game", function() {
    it("should return 0 when the array contains no 3 or 5", function() {
        const result = Electrongame([1, 2, 4, 6]);
        expect(result).toBe(0);
    });
	it("should return 6 when the array contains one 3 and one 5", function() {
        const result = Electrongame([3, 5]);
        expect(result).toBe(6);
    });

    it("should return 12 when the array contains two 3s and two 5s", function() {
        const result = Electrongame([3, 3, 5, 5]);
        expect(result).toBe(12);
    });
});
});
