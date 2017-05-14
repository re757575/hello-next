//@ts-check
import fetch from "isomorphic-unfetch";
import MyLayout from "../components/MyLayout.js";

const Content = props => (
  <div>
    <h1>{props.movie.Title}</h1>
    <p>{props.movie.Plot}</p>
    <img src={props.movie.Poster} />
  </div>
);

const Post = props => (
  <MyLayout>
    <Content {...props} />
  </MyLayout>
);

// 透過 index page 的連結將會為 client side fetch,
// 直接在瀏覽器輸入網址為 server side fetch
Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://www.omdbapi.com/?i=${id}`);
  const movie = await res.json();

  console.log(`Fetched movie: ${movie.Title}`);

  return { movie };
};

export default Post;
