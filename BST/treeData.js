const Node = require('./node');

class treeBinary {
  
    constructor(Root){
      this.root=Root!=null?Root:null;
    }
    
    insert(key){
      if(this.root===null){
        this.root=new Node(key);
      }else{
        this._insertNode(this.root,key)
      }
    }
    
    _insertNode(node,key){
      if(node.value>key){
        if(node.left!==null){
          this._insertNode(node.left,key)
        }else{
          node.left=new Node(key);
        }
      }else if(node.value<key){
        if(node.rigth!==null){
          this._insertNode(node.rigth,key)
        }else{
          node.rigth=new Node(key)
        }
      }
    }
    
    find(key){
      if(this.root===null){
        return false;
      }else{
        return this.findNode(this.root,key)
      }
    }
    
    findNode(node,key){
      if(node.value>key){
        if(node.left!=null){
          return this.findNode(node.left,key);
        }
        return false
      }else if(node.value<key){
        if(node.rigth!=null){
          return this.findNode(node.rigth,key);
        }
        return false 
      }else{
        return true;
      }
    }

    height(){
      if(this.root === null) {
        return 0;
      }else{
        return this.heightNode(this.root)
      }
    }
    
    heightNode(node) {
      if (node === null) {
        return 0;
      } else if(node.rigth == null&&node.left==null) {
        return 0;
      }
      let leftHeight = this.heightNode(node.left);
      let rightHeight = this.heightNode(node.rigth);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
module.exports = treeBinary;