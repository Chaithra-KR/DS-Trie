class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.wordCount = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;  
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
      currentNode.wordCount++;
    }
    currentNode.isEndOfWord = true;
  }

  search(word){
      let currentNode = this.root
      for (let i = 0; i < word.length; i++) {
          const char = word[i];
          if (!currentNode.children.has(char)) {
              return false
          }
          currentNode = currentNode.children.get(char)
      }
      return currentNode.isEndOfWord
  }

  delete(word) {
    if (!this.search(word)) {
      return false;
    }

    let currentNode = this.root;
    let deletePath = [];
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      currentNode = currentNode.children.get(char);
      currentNode.wordCount--;
      if (currentNode.wordCount === 0) {
        deletePath.push({ node: currentNode, key: char });
      }
    }
    currentNode.isEndOfWord = false;

    for (let i = deletePath.length - 1; i >= 0; i--) {
      const { node, key } = deletePath[i];
      node.children.delete(key);
      if (node.isEndOfWord || node.children.size > 0) {
        break;
      }
    }

    return true;
  }

  traverse() {
    const words = [];

    function traverseHelper(node, prefix) {
      if (node.isEndOfWord) {
        words.push(prefix);
      }

      for (const [key, childNode] of node.children) {
        traverseHelper(childNode, prefix + key);
      }
    }

    traverseHelper(this.root, '');

    return words;
  } 
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.traverse());
trie.delete("banana");
console.log(trie.traverse());
