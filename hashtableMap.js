//Hastable implementation using Map:

class HashTable{
    constructor()
    {
        this.table=new Map();
    }

    set(key,value)
    {
        if(this.table.has(key))
        {
            this.table.get(key).push(value);
        }
        else{
            this.table.set(key,[value]);
            }
        //this.table.set(key,value);
    }

    get(key)
    {
        return this.table.get(key);
    }

    has(key)
    {
        return this.table.has(key);
    }

    delete(key)
    {
        this.table.delete(key);
    }

    clear()
    {
        this.table.clear();
    }
    size()
    {
        return this.table.size;
    }
}

const hashtable=new HashTable();

hashtable.set('name','Alice');
hashtable.set('name','Bob');
hashtable.set('name','Jimmy');

console.log(hashtable.get('name'));
console.log(hashtable.has('name'));
hashtable.delete('name');
console.log(hashtable.has('name'));
