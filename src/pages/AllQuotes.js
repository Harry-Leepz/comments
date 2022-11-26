import { useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: quotesData,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // check status and show loading spinner component
  if (status === "pending") {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  // check for error and show error message
  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  // check for data length, and show no data found
  if (status === "completed" && (!quotesData || quotesData.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={quotesData} />;
};

export default AllQuotes;
