const Node =  require('./BST/node');
const treeBinary = require('./BST/treeData');

function main(){
  const tree = new treeBinary();
  const node1 = new Node(1);
  tree.insert(4);
  tree.insert(5);
  tree.insert(7);
  tree.insert(2);
  tree.insert(10);
  console.log(tree.height());
  console.log(tree.root);
  console.log(node1)
}
main();