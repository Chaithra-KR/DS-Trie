class TrieNode {
    constructor(){
        this.children = new Map()
        this.wordCount = 0
        this.isEndOfWord = false
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode())
            }
            currentNode = currentNode.children.get(char)
            currentNode.wordCount++
        }
        currentNode.isEndOfWord = true
    }
    countWordsWith(prefix){
        let currentNode = this.root
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!currentNode.children.has(char)) {
                return 0
            }
            currentNode = currentNode.children.get(char)
        }
        return currentNode.wordCount
    }
}

const trie = new Trie()

trie.insert("app")
trie.insert("apple")
trie.insert("car")
trie.insert("bike")
console.log(trie.countWordWith("c"));
console.log(trie);
