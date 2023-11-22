// const n1={
//     data:100
// }
// const n2={
//     data:200
// }
// n1.next=n2
// console.log(n1)
class Node{
    constructor(data, next=null){
        this.data=data
    ;
    this.next=next
    }

}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0

    }
    // Insert 
    InsertFirst(data){
        this.head=new Node(data,this.head)
    }
}