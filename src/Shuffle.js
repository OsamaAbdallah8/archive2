/**
 * Shuffles an array in place.
 * Required by Udacity Starter Code Rubric.
 * @param {Array} array 
 * @returns {Array} shuffled array
 */
export function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
