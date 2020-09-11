### Chat Room Status - Create a function that takes: 

1. An **Array** of **Users** in a **Chatroom** as an argument. 
1. Shows the **Numbers** of **Users** in the console based on the below **Rules**:
    1. If there is **No One**, shows **"No One Online."**
    1. If there is **1 Person**, shows **"[user1] Online."**
    1. If there are **2 People**, shows **[user 1] and [user 2] Online."**
    1. If there are **n>2 People**, shows the **First Two Names** and **Adds "and n-2 More online."**. (See Example - 3)

> howManyOnline([]) ➞ "No One Online." 

> howManyOnline(["Emma", "Ava"]) ➞ "Emma and Ava Online."

> howManyOnline(["Bob", "Ray", "Jonny", "Ricky", "Bret", "Tom"]) ➞ "Bob, Ray and 4 More Online." 

Codepen Link: [Chat Room Status](https://codepen.io/javascriptstudent/pen/qBZoGXy?editors=0012)