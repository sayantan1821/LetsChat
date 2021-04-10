import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'
const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='f98a774f-d40a-4fa0-8aa0-d6cf65a0eee9'
      userName='Sayantan'
      userSecret='123456'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;