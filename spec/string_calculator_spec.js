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
});
});
