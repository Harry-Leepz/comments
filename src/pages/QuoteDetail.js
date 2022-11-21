import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun",
  },
  {
    id: "q2",
    author: "Harry",
    text: "Learning Python is great",
  },
  {
    id: "q3",
    author: "Jeevan",
    text: "Learning .Net is awful",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link to={`/quotes/${params.quoteId}/comments`} className='btn--flat'>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
