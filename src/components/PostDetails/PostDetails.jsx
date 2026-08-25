import { Link, useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, userId, title, body } = post;

  return (
    <div>
      <h2>Post ID: {id}</h2>
      <h4>User ID: {userId}</h4>
      <h3>{title}</h3>
      <p>{body}</p>

      <Link to="/posts">
        Back to Posts
      </Link>
    </div>
  );
};

export default PostDetails;