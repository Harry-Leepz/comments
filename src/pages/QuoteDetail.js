import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <div>
      Quote Detail Page
      <h1>{params.quoteId}</h1>
    </div>
  );
};

export default QuoteDetail;
