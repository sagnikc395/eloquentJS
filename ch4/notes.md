# Data Structures : Objects and Arrays 

- Object allows us to group values - including other objects - to build more complex structures.

## Data Sets 
- To work with chunk of digital data, we need a way to represent our machine's memory.
- JS provides us with a data type specifically for storing seqeunces of values. Called as array and written as a list of values between square brackets.
- First index of a array is 0 , not 1 .

## Properties
- mystring.length, Math.max etc. are properties of some value. For the first case we are accessing the length property of the value in mystring and in the second we access the property named max.
- except null and undefined all JS values are properties.
- Property names can be accessed with a dot and with square brackets. Both value.x and value[\x] access a property on value  but not necessarily the same property.
- value.x fetches the property of value named "x", value[\x] tries to evaluate the expression and uses the result , converted to a string, as the property name.

## Methods:
- Both string and array values contain,a number of properties that hold function values.
- Even though we did not pass the argument explicitly of the string to uppercase, the function somehow has access to the string, the value whose property we called.
- Properties that contain functions are generally called emthods o the value they belong to.

## Objects:
- value of the type object are arbitary collections of properties. One way to create a object is by using braces as an expression.
- Each property has a name followed by a colon and a value.Properties whose names arent valid binding name or valid numbers have to be quoted.
- Braces have 2 meaning in Javascript:
  - At start of stmt, they start a block of statements.
  - In any other posn, they describe an object.
- Possible to assign a value to a property expression with the = operator. This will replace the property's value if it already existed or create a new property on the object if it didnt exist yet.
- delete operator:
  - when applied to an object property will remove the named property from the object.
- in operator:
  - tells us whether that object has a property with that name. 
  - different between setting a property to undefined and actually deleting it is that, in the first case, the object still has the property , whereas in the second case, the property is no longer present and in will return false.
- Object.keys -> 
  - give it an object and it will return us an array of strings - the object's proeprty names.
- Object.assign ->
  - copies all properties from 1 object to another.
  
## Mutability:
- numbers, strings and booleans are all immutable - it is impossible to change the value of those type.
- we can combine them and derive new values from them, but when we take a specific string value, that value will alwyas remain the same.
- Object work differently, we can change their proeprties, causing a single object value to have different content at different times.
- object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same identity.
- const binding to an object similarly can itself not be changed and will continue to point at the same object, the contents of that object might change.
- no inbuilt deep comparision operator built into JS.
- == is shallow comaprision , only check by value, not my location in memory.
  
- Arrays have a include method that checks whether a given value exists.

## More Array Methods:

- for adding and removing things at the start of an array is called unshift and shift.
- indexOf method ->
  - to search for a specific value, the method searches through the array form the start to the end and returns the index at which the requested value was found or -1.
  - similarly lastIndexOf() toget the last instance of a element.
- slice ->
  - takes a start and a end index and returns an array that has only the elements between them. Start is inclusive and the end index is exclusive.
  - when end index is not give, slice will take all of the elements after the start idx. We can also omit the start index to copy the entire array.
- concat ->
  - can be used to glue arrays together to create a new array (like +)
  - if concat is passed as an argument that is not an array, that value will be added to the new array as if it were a 1 element array.

## Strings and Properties:
- values of type string, number and boolean are not objects and though the language doesnt complain if we try to set new properties on them, it doesnt actually store those properties.
- these have built-in properties. Every string value has a number of methods.Some very useful ones are slice and indexOf.
  - Note: string's indexOf can search for a string containinign more than 1 character, whereas the corresponding array method looks only for a single element.
- trim ->
  - removes whitespaces from the start and end of a string.
- padStart ->
  - takes the desired length and padding character as arguments.
  - same padEnd also exists.
- split and join ->
  - can split a string on very occurence of another string.
- repeat ->
  - string can be repeated with the repeat method, which creates a new string containing multiple copies of the origin string glued together.

## Rest Params:
- A function can accept any number of arguments.
- To write such a function, we can put 3 dots before the function's last parameter.
- when such a function is called, the rest parameter is bound to a array containing all further arguments. If there are other parameters before it, their values arent part of the array.
- square bracket array notation similarly allows the 3dot operator to spread another array into the new array.

## Math Object:
- Math object is used as a container to group a bunch of related functionality. There is only 1 Math object, and it is almost never useful as a value.
- Rather it provides a namespace so that all these functions and values do not have to be global bindings.
- JS gives error or wans when defining a binding that is already taken for decalred using let and const but not for standard bindings nor for bindings declared uisng var or function.

## Destructuring:
- if we know the value we are binding is an array, we can use square brackets to "look" inside of the value, binding its contents.
- Destructuring null or undefined , we get an error, much like we would directly try to access a property of those values.

## JSON:
- to send data in a strict and succient format over the network , we serialize the data. That means converting the data into a flat description.
- A popular method is called as JSON.
- Popular data storage and communciation format on the web, even in languages other than Javascript.
- Looks similar to JS way of writing arrays and objects, with a few restrictions.
  - All property names have to be surrounded by double quotes
  - only simple data expressions are allowed - no function calls,bindings or anything that involves computation.
  - comments are not allowed.
  - 