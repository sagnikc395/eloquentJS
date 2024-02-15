# Higher Order Functions 

- size almost involves complexity, and complexity confuses programmers. this in turn introduces bugs into programs.
- a large program then provides a lot of space for these bugs to hide, making them hard to find.

## Abstraction:
- Abstractations hide details and give us the ability to talk about problems at a higher (or more abstract) level.
- when programming, we can't rely on all the words we need to be waiting for us in the dicitionary.
- Useful skill in programming to notice when we are working at too low a level of abstraction.

## Abstracting Repetition:
- Plain functions are a good way to build abstractions. but sometimes they fall short.
- Can build abstractions on top of abstractions.

### Higher-Order Functions:
- Functions that operate on other function , either by taking them as arguments or by returning them , are called as higher order functions.
- Higher-order functions allow us to abstract over actions, not just values. They come in several forms. Eg: can have functions that create new functions.
- ranges property contains an array of Unicode character ranges, each of which is a 2 element array containing a lower bound and a upper bound. Any character codes within these rages are assigned to the script.
- Lower bound is exclusive and the upper bound is non-inclusive.
  
### Filtering Arrays:
- filter is a function that does not delete the elements from exisiting array, but rather builds up a new array with only the elements that pass the text. This function is pure. It does not modify the array that it is given.

## Transforming with Map:
- map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.
- standard array method.