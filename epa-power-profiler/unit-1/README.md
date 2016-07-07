# EPA Power Profiler - Unit 1

## Background

This is a  project that will build upon your knowledge of hashes, so make sure you've gone over the material in the ScriptEd hashes lesson, [here](https://github.com/ScriptEdcurriculum/curriculum2015/tree/master/units/14-javascript2_2).  We will also be using a little bit of JQuery, though it will be very limited and only a passing familarity is required.  For more JQuery background look [here](https://github.com/ScriptEdcurriculum/curriculum2015).

## Goal

To create a page that displays tables showing data from the EPA Power Profiler Charts, linked in the reference.  These tables should show the National average fuel mix of sources of electricity and the National average emissions rates.  In addtion two more tables should show Regional fuel mix and emission rates for at least 10 (or more) regions in the United States, specified by a Zip Code.  These regions must span at least 3 (or more) different states.

## Instructions

The starter code is provided in this project with the `index.html` file.  Be sure to fork this repository and then specify your github repo when creating the Cloud9 workspace.

### Part 1 - National Averages - Basic Hash
The base tables for the National Averages are provided for you in the html, you will be filling in the table using a hash and JQuery.

1) Add a style to `main.css` that adds borders around the table cell.  Make the border a solid black between 1-5 pixels wide (whichever you prefer).  Also add padding to the table cells.

2) Create a hash of the National Average fuel mix and emission rates data on the EPA site.

3) Use JQuery `append` function to add a row to the fuel mix and emission rates table, filling in all the needed columns from the hash map you made in the previous step.

### Part 2 - State Averages - Nested Hashes and Lists
You will now add state averages to your table.  Pick at least 5 different states
from the provided emissions tables.

1) Create the base state tables, they will be very similar to the National Average tables.  The most important difference is you must add an extra column to store the State.

2) Make a hash that list **only TWO** states at first.  We want to make sure your project is working before adding more states.  Your Hash must be organized as follows:

```
var states  = {
  "New York":
    {
      "net_generation": 3905323.35
      "fuel_mix": {
        "hydro":   8.3,
        "nuclear": 2.3,
        ...
      },
      "emissions": {
        "nitro_oxides": 92.2,
        "sulfur":       1.3,
        "carbon": 2941,
        "methane": 93,
        "nitrous_oxide": 128
      }
    },
  "Florida": {
  ...
  },
  ...
}
```

3) Use JQuery `append` to add these regions to the tables you made in the previous steps.  You *must* use for loops to fill in these tables.  In fact you must use *nested* for loops to fill in the table. Note that you must loop over a hash of states, not an array.  The easiest way to loop over this hash would be to use a `for in` loop, which goes through each key in the hash.  For Example:

```
var states = {
  "New York": 1,
  "Florida":  2,
  "California": 3
}

for (key in states) {
  console.log(key + ": " + states[key]);
}
```

Will print the following:

```
New York: 1
Florida: 2
California: 3
```

Again, note that the hash of states and emissions is *nested*, you will need to
loop through the states and then inside that loop begin a nother loop through
the `fuel_mix` and the `emissions`.  Below is an example:

```
var states = {
  "New York": {
    "net
  }
}

### Part 3 - Search

## References
- [EPA Tables](doc/tables.md)
- [EPA Power Profiler](http://oaspub.epa.gov/powpro/ept_pack.charts)
- [Zipcode Finder](http://maps.huge.info/zip.htm)