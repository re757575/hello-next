//@ts-check
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import MyLayout from "../components/MyLayout";

const PostLink = props => (
  <li>
    <Link
      as={`/p/${props.movie.imdbID}`}
      href={`/post?id=${props.movie.imdbID}`}
    >
      <a>{props.movie.Title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        font-family: "Arial";
        text-decoration: none;
        color: #4fb3bf;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

// jsx css 有範圍限制, child component 無效
// 除非使用 <style jsx global></style>
const Index = props => (
  <MyLayout>
    <h1>Batman Movies</h1>
    <ul>
      {props.movies.map(movie => <PostLink key={movie.imdbID} movie={movie} />)}
    </ul>
    <style jsx>{`
      h1 {
        font-family: "Arial";
        color: #005662;
      }
      ul {
        padding: 0;
      }
    `}</style>
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
