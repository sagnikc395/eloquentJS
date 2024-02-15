//simple logging 
for(let i=0;i<100;i++){
    console.log(i);
}

// abstracting this to a function 
function repeatLog(n){
    for(let i=0;i<n;i++){
        console.log(i);
    }
}

// we can further abstract this as doing a action for n times 
function repeat(n,action){
    for(let i=0;i<n;i++){
        action(i);
    }
}

// here we dont need to pass a predefined function to repeat. often easier to create a function value on the spot instead.

let labels = [];
repeat(5,i => {
    labels.push(`Unit ${i+1}`);
});
console.log(labels);