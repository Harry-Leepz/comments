import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
