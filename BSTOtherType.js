function BST() {
    
    this._root = null;
     
}


//Private insert function
  function insert (node,currNode){
        if(currNode == null   || currNode.data == node.data){
                currNode =node;
               console.log("added----" + currNode.data );
         }else if(currNode.data>node.data){ currNode.left = insert(node,currNode.left);}
           else {currNode.right = insert(node,currNode.right);}
           return currNode    
        }

//Private Inorder Traversal function
   function inOrderTraverse(currNode){
    if(currNode !=null){
         inOrderTraverse(currNode.left);
         console.log(currNode.val);
          inOrderTraverse(currNode.right);
          }
      }





   //Add to BST
   BST.prototype.add = function (data,val){
        //create a new item object, place data in
        var node = { 
                data: data,
                val  :val, 
                left: null,
                right:null 
            };
            
     this._root =    insert(node,this._root);
    };
    
   BST.prototype.rootreturn = function(){return this._root;};

   BST.prototype.inOrder =function(){
         inOrderTraverse(this._root);
        };
     



    //Interface
    module.exports =BST;
