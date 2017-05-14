//@ts-check
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import MyLayout from "../components/MyLayout";

const PostLink = props => (
  <li key={props.movie.imdbID}>
    <Link as={`/p/${props.movie.imdbID}`} href={`/post?id=${props.movie.imdbID}`}>
      <a>{props.movie.Title}</a>
    </Link>
  </li>
);

const Index = props => (
  <MyLayout>
    <h1>Batman Movies</h1>
    <ul>
      {props.movies.map(movie => (
        <PostLink movie={movie}/>
      ))}
    </ul>
  </MyLayout>
);

// https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle
// static async function, can add into any page in app (can not be used in children components)
// getInitialProps will execute on the server only
Index.getInitialProps = async () => {
  const res = await fetch("http://www.omdbapi.com/?s=batman");
  const data = await res.json();

  // only on the server
  console.log(`Movie data fetched. Count: ${data.Search.length}`);

  return {
    movies: data.Search
  };
};

export default Index;
