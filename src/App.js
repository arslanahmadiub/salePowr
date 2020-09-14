import React from 'react';
import ChatNotifierPanel from "./components/sections/RightSidebar/ChatNotifierPanel"
import Home from './components/sections/Home';

const messages = [
  { sender: "Albert Flores", image: "~/Desktop/Projects/powrsale/src/assets/images/woman-avatar.jpg", message: "Item will be replaced with something else" },
  { sender: "Albert Flores", image: "~/Desktop/Projects/powrsale/src/assets/images/woman-avatar.jpg", message: "Item will be replaced with something else" },
  { sender: "Albert Flores", image: "~/Desktop/Projects/powrsale/src/assets/images/woman-avatar.jpg", message: "Item will be replaced with something else" },
  { sender: "Albert Flores", image: "~/Desktop/Projects/powrsale/src/assets/images/woman-avatar.jpg", message: "Item will be replaced with something else" },
  { sender: "Albert Flores", image: "~/Desktop/Projects/powrsale/src/assets/images/woman-avatar.jpg", message: "Item will be replaced with something else" },
  { sender: "Albert Flores", image: "~/Desktop/Projects/powrsale/src/assets/images/woman-avatar.jpg", message: "Item will be replaced with something else" },
]
function App() {
  return (
    <div className="App">

      <ChatNotifierPanel />

    </div>
  );
}

export default App;
