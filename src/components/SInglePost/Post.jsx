import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p>{body}</p>

        <div className="card-actions justify-end">
          <Link to={`/posts/${id}`} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
