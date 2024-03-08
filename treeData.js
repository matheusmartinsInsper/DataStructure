const Node = require('./node');

class treeBinary {
  
    constructor(Root){
      this.root=Root!=null?Root:null;
    }
    
    insert(key){
      if(this.root===null){
        this.root=new Node(key);
      }else{
        this.insertNode(this.root,key)
      }
    }
    
    insertNode(node,key){
      if(node.value>key){
        if(node.left!==null){
          this.insertNode(node.left,key)
        }else{
          node.left=new Node(key);
        }
      }else if(node.value<key){
        if(node.rigth!==null){
          this.insertNode(node.rigth,key)
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
    
  }
module.exports = treeBinary;