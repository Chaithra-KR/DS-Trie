class TrieNode {
    constructor(){
        this.children = new Map()
        this.isEndOfWord = false
        this.wordCount = 0
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word){
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char , new TrieNode())
            }
            currentNode = currentNode.children.get(char)
            currentNode.wordCount++
        }
        currentNode.isEndOfWord = true
    }
    
    startsWith(prefix){
        let currentNode = this.root
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!currentNode.children.has(char)) {
                return false
            }
            currentNode = currentNode.children.get(char)
        }
        return true
    }

}

const trie = new Trie()
trie.insert("this")
trie.insert("phat")
trie.insert("is")
console.log(trie.startsWith("t"));
console.log(trie);
