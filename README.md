# App live at https://shivamrathore513.github.io/Stopwatch/
 # Stopwatch
On a recent project, I needed to create a stopwatch. My initial thought was just to run javascript setInterval to keep track of time. While setInterval will be useful in our case, I made the mistake of depending on the setInterval alone to estimate time. Here is an example of what my code looked like in the beginning.
<!-- let totalSeconds = 0
setInterval(() => {
   totalSeconds += 1
}, 1000)   -->
The problem was that the code above is not a good way to keep track of time. Because, even though our setInterval will call our callback function every second, it won't always execute the function at exactly one-second intervals. This is because our callback function will only be added to our call stack, but if the call stack has other work to execute, it will cause a delay in our time. Instead, let's build a more accurate stopwatch using javascript Date() constructor.
