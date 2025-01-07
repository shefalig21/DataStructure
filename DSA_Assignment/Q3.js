class FreqStack {
    constructor() {
        this.freqMap=new Map(); //to keep track of frequency of each element/here we are basically taking keys as ele and value as their frequencies
        this.groupMap=new Map(); //to keep elements grouped by theirr frequency
        this.maxFreq=0; //to keep track of highest frequency
    }

    push(val){

        const freq=this.freqMap.has(val)?this.freqMap.get(val)+1:1;//basically if ele already prsent then increment its value by 1,othwerwise set it to1
        this.freqMap.set(val,freq);

        //if freq is not already in groupMpa then a new array is created and added in groupMap
        if(!this.groupMap.has(freq)){
            this.groupMap.set(freq,[]);
        }
        this.groupMap.get(freq).push(val);

        //to ceheck if upadted freq is greater than max freq and upadte it
        if(freq>this.maxFreq){
            this.maxFreq=freq;
        }
    }

    pop(){

        const vals=this.groupMap.get(this.maxFreq);//basically accessing the ele with max frequency and then pop it
        const val=vals.pop();

        //Updating frequency map
        this.freqMap.set(val,this.freqMap.get(val)-1); //freq is decremented by 1

        //if maxFreq become empty after popping value,then entry is removed from gruup map and mexFreq is decremenred by 1.
        if(vals.length ===0){
            this.groupMap.delete(this.maxFreq);
            this.maxFreq--;
        }

        return val;
    }
}

const Stack=new FreqStack();
Stack.push(5);
Stack.push(7);
Stack.push(5);
Stack.push(7);
Stack.push(4);
Stack.push(5);

console.log(Stack.pop()); // 5
console.log(Stack.pop()); // 7
console.log(Stack.pop()); // 5
console.log(Stack.pop()); // 4
