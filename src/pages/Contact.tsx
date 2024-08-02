import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      Contact
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
};

export default Contact;
