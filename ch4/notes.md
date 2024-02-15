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