//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
//You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
//Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash(words) {

    // if (words == []) {
    //     return "";
    // } else if (words.length === 1) {
    //     return words[0]
    // } else {
    //     return words.join(' ');
    // }

    return words.join(' ');

};

test('Should return empty string for empty array.', () => {
    expect(smash([])).toBe('');
});

test('One word example should return the word.', () => {
    expect(smash(['hello'])).toBe('hello');
});

test('Multiple words should be separated by spaces.', () => {
    expect(smash(['hello', 'world'])).toBe('hello world');
    expect(smash(['hello', 'amazing', 'world'])).toBe('hello amazing world');
    expect(smash(['this', 'is', 'a', 'really', 'long', 'sentence'])).toBe('this is a really long sentence');
});