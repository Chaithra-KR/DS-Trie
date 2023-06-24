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

    traverse(){
        const words = []
        const traverseHelper = (currentNode,prefix)=>{
            if (currentNode.isEndOfWord) {
                words.push(prefix)
            }
            currentNode.children.forEach((childNode , key) => {
                traverseHelper(childNode , prefix+key)
            });
        }
        traverseHelper(this.root ,'')
        return words
    }

}

const trie = new Trie()

trie.insert("app")
trie.insert("apple")
trie.insert("car")
trie.insert("bike")
console.log(trie.traverse());
console.log(trie);
