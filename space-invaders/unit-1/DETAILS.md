##Algorithm

In essense and algorithm is just an ordered list of instructions. Algorithms is the fundamental way you, the programmer, can communicate with a computer.  Of course algorithms are also used to communicated with other people.  For example, if you asked me for instructions on how to get to the grocery store I might right down instructions like so:

  1. Exit your home and turn right on 53rd St.
  2. Go down 2 blocks and make a right on 8th Avenue
  3. After 15 blocks make a left on 37th St.
  4. Then go half-way down the block.
  5. The grocery store will be on your left.

That list of instructions is a perfectly good algorithm, but how computers take instructions is very different then how would normally write them for other people.

In order to communicate instructions to computers we use code.  Just like when communicating with people there are many different types of languages that we can use to communicate with a computer.  The one we're going to use is called `Javascript`.  Javascript is the main language used by your web browser (Chrome, Firefox, etc.) to help create interactive websites.  It's an ideal language for learning because it's heavily used to create the sites you visit everyday and incredibly easy to run since all you need is web browser.

## Types

Before we get into instructions though, we're going to briefly discuss a concept called types.  When you create instructions you also sometimes have to give `input` into those instructions.  For example, the second instruction from the directions above tells you to turn right, but where?  2 blocks later.  If you wanted to turn right later you could have said 3 or 4 blocks instead.  In programming we can give inputs too, as data to instructions.  But it's important to distinguish between the different types of that data, and in programming languages we call that the `type` of data.  There are few different `types`, but we are only going to go over 2 of them briefly for now, we'll go over many more and into depth later.

The first type we'll go over is the `Number` type.  You should be pretty familiar with this type, it's simply the decimal numbers you're use to seeing everyday.  They are represented as always by decimal digits, i.e. 4, 832, -78, 0.

The second type is called a `string`.  A string is a list of characters that you type in.  They can be composed of any characters you can type in with your keyboard, including numbers.  Though you can put numbers in `strings`, they don't behave the same ways as the `number` type (i.e. you can't add, subtract, multiple, or divide them).  In Javascript you delimit the beginning and end of numbers by using single or double quotes.  For example, below are all examples of strings:

  * `"Hello, world!"`
  * `"abde   fghitj klfh"`
  * `"123abc"`
  * `"45678"`

## Parameters

We now have our two types of string and number, but let's expand about what it means to be an input.  When we write programs we want our code to be as simple and terse as possible while also being easy to read.  Notice in our example above how instructions 2 and 3 are very similar, but worded slightly differently.  Let's list out the differences:

  1. The number of blocks to go down.
  2. The direction you turn.
  3. The street you turn on.

What are the `types` of 1, 2, and 3?

What if we just had a general sentence that took different values for these 3 things?  Below is an example:

`Go down {x} blocks, turn {y} on {z}.`

x, y, and z correspond the numbers 1, 2, and 3 above.  We have not made a *generic* sentence that takes in different values, `inputs`, and that can easily be reused in our set of instructions.  In javascript we also call these inputs `parameters`. In code it's very important we use this generic structure, and in programming you can with `functions`.  We will not go into functions in depth here but we will give a brief example of how you would make one to mak the above instructions simpler. The example below will work in every up-to-date browser, *except* IE (sigh, see [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Browser_compatibility) if curious).

```
  function goAndTurn(num, direction, street) {
    console.log(`Go down ${num} blocks, turn ${direction} on ${street}`);
  }

  goAndTurn(0,  'right', '53rd St.');
  goAndTurn(2,  'right', '8th Avenue')';
  goAndTurn(15, 'left', '37th St.');
  console.log('Then go half-way down the block.');
  console.log('The grocery store will be on your left.');

```
