export const generateWordLadder = (startWord, endWord) => {
  const wordList = ["DOG", "DIG", "BIG", "BIN", "BUN", "GLASS", "CLASS", "CLANS", "CLANK", "BLANK", "BLINK", "BRINK", "CHARGE" , "CHANGE" , "CHANGS", "CHANTS" , "CHINTS", "CHINES", "CHINED" , "COINED", "COINER", "CONNER"];

  const visited = new Set();
  const queue = [[startWord, [startWord]]];

  while (queue.length > 0) {
    const [currentWord, ladder] = queue.shift();

    if (currentWord === endWord) {
      return ladder;
    }

    const neighbors = findNeighbors(currentWord, wordList);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, [...ladder, neighbor]]);
      }
    }
  }

  return []; 
};

const findNeighbors = (word, wordList) => {
  const neighbors = [];

  for (const candidate of wordList) {
    if (isNeighbor(word, candidate)) {
      neighbors.push(candidate);
    }
  }

  return neighbors;
};

const isNeighbor = (word1, word2) => {
  let diffCount = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
    }

    if (diffCount > 1) {
      return false;
    }
  }

  return diffCount === 1;
};
