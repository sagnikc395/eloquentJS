## Functions:

- They are the bread and butter of Javascript Programming.
- Gives us a way to structure larger programs , to reduce repetition, to associate names with subprograms and to isolate these subprograms from each other.

- Function have a set of parametrs (here x) and a body, which contains the statements that are to be executed when the function is called. The function body of a function craeted this way must always be wrapped in braces, even when it consists of only a single statement.

- Function can have multiple parameters or no parameters at all.

- A return stmt determines the value the function returns. When control comes across such a statement, it immediately jumps out of the current function and gives the returned value to the code that called the function.
- A return keyword without an expression after it will cause the function to return undefined.
- Functions that dont have a return statement at all , like makeNoise , simple returns a undefined.

- Parameters to a function behave like regular bindings, but thier initial values are gien by the caller of the function, not the code in the function itself.

## Bindings and Scopes:

- Each binding has a scope, which is the part of the program in which the binding is visible. For bindings defined outside of any function or block, the scope is the whole program -> we can refer to such bindings wherever we want. These are called global.
- Bindings created for function parameters or decalred inside a function can be referenced only in that function, so they are local bindings.

- Every time the function is called, new instaces of these bindings are created.
- Bindings declared with let and const are in fact local to the block that they are declared in, so if we create one of those inside of a loop, the code before and after the loop cannot "see" it.
- Each scope can 'look out' into the cope around it , so x is visible inside the block.
- Exception is when multiple bindings have the same name -> in that case , code can only see the innermost one.

## Nested Scope:
- Javascript distinguishes not just global and local bindings. Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.
  -  **Lexical Scoping**:
     -  set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope

### Functions as Values
- Function value can do all the things that other alues can do - we can use it in arbitary expressions, not just call it. It is possible to store a function value in a new binding , pass it as an argument to a function and so on.
- A binding that holds a function is still just a regular binding and can , if not constant , be assigned a new value.
- 