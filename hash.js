class HashMap {
    constructor(){
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.bucket = [];
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i) % this.capacity;
        }

        return hashCode;
    }

    set(key, value){
        let index = this.hash(key);

        if(!this.bucket[index]){
            this.bucket[index] = [];
        }

        for(let i=0; i < this.bucket[index].length; i++){
            if(this.bucket[index][i].key === key){
                this.bucket[index][i].value = value;
                return;
            }
        }

        this.bucket[index].push({ key, value });
        this.size++;

        if(this.size > this.capacity * this.loadFactor){
            this.resize();
        }
    }

    resize() {
        const oldBuckets = this.bucket;

        this.capacity *= 2;

        this.bucket = new Array(this.capacity);
        this.size = 0;

        for (let buckets of oldBuckets) {
          if (buckets) {
            for (let pair of buckets) {
              this.set(pair.key, pair.value);
            }
          }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.bucket[index];

        if (!bucket){
            return null;
        } 

        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i].key === key) {
            return bucket[i].value;
          }
        }
    
        return null;
    }

    has(key){
        const index = this.hash(key);
        const bucket = this.bucket[index];

        if (!bucket){
            return null;
        } 

        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i].key === key) {
            return true
          }
        }
    
        return null;
    }

    remove(key){
        const index = this.hash(key);
        const bucket = this.bucket[index];

        if (!bucket){
            return null;
        } 

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
          }
        }
    
        return null;
    }

    length(){
        let counter = 0;
        
        if (!this.bucket){
            return null;
        }

        for(let i = 0; i < this.bucket.length; i++){
            const bucket = this.bucket[i];
            if (bucket) {
                counter += bucket.length;
            }
        }

        return counter;
    }

    clear(){

        for(let i = 0; i < this.bucket.length; i++){
            this.bucket[i] = null;
        }
    }

    keys() {
        let arr = [];

        for (let i = 0; i < this.bucket.length; i++) {
            const bucket = this.bucket[i];

            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    arr.push(bucket[j].key);
                }
            }
        }   

        return arr;
    }

    values(){
        let arr = [];

        for (let i = 0; i < this.bucket.length; i++) {
            const bucket = this.bucket[i];

            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    arr.push(bucket[j].value);
                }
            }
        }

        return arr;
    }

    entries() {
        let arr = [];

        for (let i = 0; i < this.bucket.length; i++) {
            const bucket = this.bucket[i];
        
            if (bucket) {  
                for (let j = 0; j < bucket.length; j++) {
                    arr.push([bucket[j].key, bucket[j].value]);
                }
            }
        }
    
        return arr;
    }
}

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log({ "length": test.length() });

test.set('lion', 'brown');
test.set('apple', 'red');
console.log({ "length": test.length() });

test.set('moon', 'silver');
console.log(test.capacity);
console.log(test.values());

console.log(test.clear());
console.log({ "length": test.length() });
