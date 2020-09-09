### Check if One Array can be Nested in Another - Create a function that takes: 

1. **2 Arrays** of **Numbers** as an argument. 
1. Shows **true** in the console, If argument **Array 1** can be **Nested** inside the argument **Array 2**.
1. Otherwise shows **false**.

> canNestOrNot([8, 1, 5, 20], [4, 7, 2]) ➞ false 

> canNestOrNot([1, 2, 4], [7, 0]) ➞ true

> canNestOrNot([9, 4, 2], [4, 6]) ➞ false

Note: **Array 1** can be **Nested** inside **Arr 2** If:
1. Arr1's **Minimum Number** is **Greater** than Arr2's **Minimum Number**, and
1. Arr1's **Maximum Number** is **Less** than Arr2's **Maximum Number**.

Codepen Link: [Check if One Array can be Nested in Another](https://codepen.io/javascriptstudent/pen/dyMdqrq?editors=0012)