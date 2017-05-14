//@ts-check
import MyLayout from "../components/MyLayout.js";

const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

// url prop is only exposed to the page's main component
export default props => (
  <MyLayout>
    <Content url={props.url} />
  </MyLayout>
);
