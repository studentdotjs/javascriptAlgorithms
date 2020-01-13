### Leaderboard Sort - Create a function that takes: 

1. An **Array Of Users Object** as an argument, **Each Defined** by with the below **Properties**:
    1. Name. 
    1. Score. 
    1. Reputation. 

1. **Sorts** the argument array to form the **Correct Leaderboard** and shows the output in the console.

1. For forming **Correct Leaderboard**: 
    1. First findout **trueScore** and for finding **trueScore** add the reputation multiplied by 2 to the score.
    1. Once you know the **trueScore** of **Each User**, sort the array according to it in **Descending Order**.

> trueLeaderBoard([  
    { name: "Ravi", score: 340, reputation: 25 },  
    { name: "Rajat", score: 230, reputation: 85 }  
]) ➞ [  
    {name: "Rajat", score: 230, reputation: 85 },   
    { name: "Ravi", score: 340, reputation: 25 }  
    ]

> trueLeaderBoard([  
    { name: "Aastha", score: 280, reputation: 40 },  
    { name: "Vivek",  score: 210, reputation: 50 },  
    { name: "Kavita", score: 320, reputation: 20 },  
    { name: "Shubham", score: 350, reputation: 15 }  
]) ➞ [  
    { name: "Shubham", score: 350, reputation: 15 },  
    { name: "Aastha", score: 280, reputation: 40 },  
    { name: "Kavita", score: 320, reputation: 20 },  
    { name: "Vivek", score: 210, reputation: 50 }  
]

Codepen Link: [Leaderboard Sort](https://codepen.io/naveencoder/pen/XWJYbEL?editors=0012)