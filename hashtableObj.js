//hashTable implementaion using objec:

class HashTable{
    constructor(){
        this.table=new Array(10);
        this.size=0;
    }

    setkey(key){
        return key%10;
    }

    insert(val){
        const idx=this.setkey(val);
        if(!this.table[idx]){
            this.table[idx]=[];
        }
        this.table[idx].push(val);
        this.size++;
    }

    get(key){
        const target=this.setkey(key);
        if(this.table[target]){
            return this.table[target];
        }
        return null;
    }

    search(val){
        const idx=this.setkey(val);
        if(this.table[idx]){
            for(let i=0;i<this.table[idx].length;i++){
                if(this.table[idx][i]==val){
                    console.log("the value is found: ",idx); 
                    return;
                }
            }
                       
        }
        console.log(" value not found");            
        
    }

    delete(key){
        const idx=this.setkey(key);
        if(this.table[idx]){
            for(let i=0;i<this.table[idx].length;i++){
                if(this.table[idx][i]==key){
                    this.table[idx].splice(i,1);
                    this.size--;
                    if(this.table[idx].length === 0){
                        this.table[idx]=undefined;
                    }
                    return true;
                }
            }
        }
        return false;
    }
}

const hashtable=new HashTable();
hashtable.insert(78);
hashtable.insert(23);
hashtable.insert(56);
hashtable.insert(11);
hashtable.insert(9);
hashtable.insert(66);
hashtable.insert(45);
hashtable.insert(99);
hashtable.insert(100);
hashtable.insert(2);

console.log(hashtable.table);

hashtable.search(88);
hashtable.search(11);

hashtable.delete(9);


console.log(hashtable.table);