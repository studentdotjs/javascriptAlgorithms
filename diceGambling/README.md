### Dice Gambling - Create a function that takes: 

1. An **Array** consisting of **Dice Rolls** from **1 - 6**. 
1. Shows the **Sum** of **Dice Rolls** in the console, with the following conditions:
    1. If **1** is **Rolled**, that is **Bad Luck**. The **Next Roll Counts** as **0**.
    1. If **6** is **Rolled**, that is **Good Luck**. The **Next Roll** is **Amplified** by a **Factor Of 2**.
    1. The **Argument Array Length** should **Always** be **3 Or Higher**.

> diceGamble([3,1,6,2]) ➞ 8 

> diceGamble([5,1,2,6,3]) ➞ 18

> diceGamble([1,6,3]) ➞ 7

Note : Even if **6** is **Rolled After 1**, **6** is not **Summed**, but the **6's "Effect"** still take place.

Codepen Link: [Dice Gambling](https://codepen.io/naveencoder/pen/XWrLzzR?editors=1012)