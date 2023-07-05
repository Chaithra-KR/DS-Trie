### Trie ### 
<br>


![Trie visualization](https://media.geeksforgeeks.org/wp-content/uploads/20220828232752/Triedatastructure1.png)<br>
Image credit : [Geeksforgeeks](https://www.geeksforgeeks.org/)<br>


* A trie is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. It is also called PREFIX TREE. 

* In a trie , each node represents an empty string , and the subsequent nodes nodes represent characters as you traverse down the tree.

* common prefix refers to the sequence of characters that is shared among multiple strings.

* In conventional ds ike array we would have store all the strings repeatedly . But in case of trie it will tales the common prefix and store one's . so that's why it's stores and retrieves data's efficiently.
<br>

### Operations ###
<br>
1. Insertion
2. Deletion
3. Search 
4. Traverse
5. Prefix matching
6. Count words with prefix : Count the No: of words in the trie that stat\rt with a given prefix.
<br>

### Advantages ###
<br>

* Prefix based structure : Like finding all strings with a common prefix.

* Fast lookup : Enables first lookup of strings.

* Space efficiency
<br>

### Applications ###
<br>

* Dictionary

* Spell Checking : Tries can be used for spell checking and correction.

* Autocomplete and Predictive Text : Tries are widely used in applications that require autocomplete or predictive text functionality, such as search engines, text editors, and messaging applications.

* IP Routing: Tries can be used for efficient IP routing in networking applications.

