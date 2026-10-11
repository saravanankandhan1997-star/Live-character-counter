# Real-Time Character Counter
 
A simple and responsive textarea that counts characters in real-time as the user types.
 
## 📌 Features
- Displays max limit: "200 characters max"
- Real-time counter updates on `input` event
- Shows format like `45/200 characters`
- Shows remaining characters
- Prevents typing after limit and displays warning message in red
 
## 🛠️ Built With
- HTML5
- CSS3
- JavaScript 
## ⚙️ How It Works
1.  Added `input` event listener to textarea
2.  Used `textarea.value.length` to get typed count
3.  Calculated remaining = `maxChars - typedChars`
4.  Updated counter text dynamically
5.  When limit reached, added warning class and message
 
## 📂 Files
- `index.html` - Structure of textarea and counter
- `style.css` - Basic styling and warning states
- `script.js` - Core logic for counting
 
## ▶️ How to Run
Just open `index.html` in your browser. No installation needed.
 
## 👨‍💻 Author
Saravanan K
