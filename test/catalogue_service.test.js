const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Assassination of Margaret Thatcher"
        )
      ).toBe(true);
    });
  });


  describe("catalogueService.checkBookByTitle", () => {
    test("returns false if the book does not exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The 4 day workweek"
        )
      ).toBe(false);
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });
    test("returns 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
    test("returns the number of books beginning with the given lowercase letter", () => {
      expect(catalogueService.countBooksByFirstLetter("r")).toBe(1);
    });
  });

  describe("catalogueService.getQuantity", () => {
    test("returns the number of books in stock", () => {
      expect(catalogueService.getQuantity("2666")).toBe(17);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns the books with the author name", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
        {title: "2666", author: "Robert Bolaño", quantity: 17 },
        {title: "By Night In Chile", author: "Robert Bolaño", quantity: 8}]);
    });
  });

  describe("catalogueService.checkQuantity", () => {
    test("returns if book and quantity is correct", () => {
      expect(catalogueService.checkQuantity("Dracula", 0)).toBe(true);
    });
  });

  describe("catalogueService.checkQuantity", () => {
    test("returns if book and quantity is incorrect", () => {
      expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
    });
  });

});
