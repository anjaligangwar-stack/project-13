Countdown Timer with Progress Bar

A responsive countdown timer project that I built during my internship.


🔴 Problem Statement
Normal countdown timers only show numbers, user ko pata nahi chalta ki kitna time bacha hai visually. Koi progress ka idea nahi milta.

🟢 Solution
Is project me maine timer ke saath ek dynamic Progress Bar add kiya hai. Jaise-jaise time khatam hota hai, progress bar 0% se 100% tak fill hota hai. Isse user ko ek clear visual idea milta hai.

 ✨ Features
- Days / Hours / Minutes / Seconds countdown
- Real-time Progress Bar (The main fix)
- Fully responsive for mobile (Redmi, etc. tested)


🛠️ Tech Stack
- HTML5
- CSS3 (Flexbox)
- JavaScript (Vanilla) - `Date()`, `setInterval()`

 What was the bug & How I fixed it?
Problem that I faced:
1.  Timer was showing negative values because `endDate` was in the past (2024).

My Fix:
1.  Changed `endDate` to a future date: `new Date("08 Nov, 2026")`.
2.  Added percentage clamping: `if(percentage > 100) percentage = 100`.


🚀 How to Run
1. Clone the repo
2. Open `index.html` in browser

 🔗 Live Link
https://unique-griffin-c4e09f.netlify.app
