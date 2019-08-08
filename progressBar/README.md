### Progress Bar - Create a function that takes: 

1. One **Character** and one **Integer (Between 0 and 100)** as an argument. 
1. Shows a **String Progress Bar**, in the console. 

> charprogressBar("$", 80) ➞ "|$$$$$$$$  &nbsp;| Progress: 80%"

> charprogressBar("*", 100) ➞ "|&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;**********| Completed!"

> charprogressBar("&", 0) ➞ "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          | Progress: 0%"

Note :

1. The **Number Argument** represents a **Percentage**.
1. The **Progress Bar** should **Begin** & **End** with **|** (Pipe).
1. Repeat the **Argument Character** to fill the **Progress Bar**, with **Each Character** equivalent to **10%**.
1. Use **Spaces** to **Pad** the progress bar to a **Length** of **10 Characters**.
1. A **Single Space** comes after the **Progress Bar**, then a **Message** with the **% Completion**. (e.g. "Progress: 90%").
1. If the **Value** is **100**, the **Message** should be shown in the console **"Completed!"**.

Codepen Link: [Progress Bar](https://codepen.io/naveencoder/pen/gVerrR?editors=0012)