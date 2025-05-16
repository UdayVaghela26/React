import { useRef, useState } from "react";
import "./App.css";

function App() {
  const name = useRef();
  const message = useRef();
  const [comments, setComments] = useState([]);

  const handlePost = (e) => {
    e.preventDefault();
    if (name.current.value !== "" && message.current.value !== "") {
      const newComment = {
        name :name.current.value,
        message:message.current.value,
      };
      setComments([newComment, ...comments]);
      
    }else {
      alert("Please fill in all fields");
    }
  

  };

  return (
    <div>
      <h2>Leave a Comment / Review</h2>
      <form>
        <input type="text" placeholder="Your Name" ref={name} />
        <br />
        <textarea placeholder="Your Message" ref={message} rows={4} />
        <br />
        <button type="submit" onClick={handlePost}>Post</button>
      </form>

      <h3>All Comments</h3>
      {comments.map((comment, index) => (
        <div key={index}>
          <strong>{comment.name.toUpperCase()}</strong>
          <p>{comment.message}</p>
  
          
        </div>
      ))}
    </div>
  );
}

export default App;
