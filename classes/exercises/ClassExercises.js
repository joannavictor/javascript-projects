// Define your Book class here:
class bookClass {
    constructor(title, author, cDate, ISBN, numPages, checkOut, bookDiscard){
      this.title = title;
      this.author = author;
      this.cDate = cDate;
      this.ISBN = ISBN;
      this.numPages = numPages;
      this.checkOut = checkOut;
      this.bookDiscard = bookDiscard;
    }
 }

// Define your Manual and Novel classes here:
class novel extends bookClass {
	constructor(title, author, cDate, ISBN, numPages, checkOut, bookDiscard) {
    super(title, author, cDate, ISBN, numPages, checkOut, bookDiscard);
}

dispose(currentYear){
   if (currentYear-this.cDate > 5) {
      this.bookDiscard = 'Yes';
   }
}
}
class manual extends bookClass {
	constructor(title, author, cDate, ISBN, numPages, checkOut, bookDiscard) {
    super(title, author, cDate, ISBN, numPages, checkOut, bookDiscard);
}
disposed(){
   if (this.checkOut > 1) {
      this.bookDiscard = 'Yes';
      let stats = `${this.title} can be discarded - ${this.bookDiscard}.`;
      return stats;
   }
 }
}

// Declare the objects for exercises 2 and 3 here:
let shipManual = new manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 101, 'No');

let myNovel = new novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432,101,"Yes");

// Code exercises 4 & 5 here:
console.log(myNovel);
console.log(shipManual);

