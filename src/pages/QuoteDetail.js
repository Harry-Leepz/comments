import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const DUMMY_DATA = [
  {
    id: 1,
    author: "Max",
    text: "Learning React is fun",
  },
  {
    id: 2,
    author: "Harry",
    text: "Learning Python is great",
  },
  {
    id: 3,
    author: "Jeevan",
    text: "Learning .Net is awful",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  return (
    <div>
      Quote Detail Page
      <h1>{params.quoteId}</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
