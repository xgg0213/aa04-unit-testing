const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word = new Word('terminal');

  describe("Word constructor function", function () {
    it('should have a "word" property', function () { // check if word.word exists
      expect(word.word).to.exist//to.equal('terminal');
      //expect.fail(word.word); // why having this line fails the test spec?
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal('terminal');
      //expect.fail(word.word, true);
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal('trmnl')
      //expect.fail(word.removeVowels(),'trmnl');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal('eia')
      //expect.fail(word.removeConsonants(),'eia');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal('erminaltay');
      //expect.fail(word.pigLatin(), 'trminalay');
    });
  });
});
