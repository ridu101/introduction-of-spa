import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();
  const handleNavigate= () => {
    navigate(`/posts/${id}`)
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p>{body}</p>

        <div>
          <Link to={`/posts/${id}`}>
            Show Details
          </Link>
          <button onClick={handleNavigate}>Details of: {id}</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
