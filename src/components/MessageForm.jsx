import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
        <FontAwesomeIcon icon={faFileUpload} />
        </span>
      </label>
      <input
        className= 'attachment'
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
       />
      <button type="submit" className="send-button" >
        <FontAwesomeIcon icon={faPaperPlane}  />
      </button>
    </form>
  );
};

export default MessageForm;
