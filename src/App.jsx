import { useReducer } from "react";
import { quotesReducer } from "@/lib/reducer";
import AddQuote from "@/components/AddQuote";
import ListQuote from "@/components/ListQuote";

function App() {
  

  const [quotes, dispatch] = useReducer(quotesReducer, [
    {
      id: 1,
      likes: 5,
      title: "Life is good!",
    },
    {
      id: 2,
      likes: 3,
      title: "Next.js is awesome!",
    },
  ]);

  const handleAddQuote = (title) => {
    dispatch({ type: "add", payload: title });
  };

  const handleDeleteQuote = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleLikeQuote = (id) => {
    dispatch({ type: "like", payload: id });
  };

  const handleDislikeQuote = (id) => {
    dispatch({ type: "dislike", payload: id });
  };

  const handleSortQuotes = () => {
    dispatch({ type: "sort" });
  };

  return (
    <div className="max-w-96 mx-auto p-2">
      <h1 className="text-3xl text-center font-bold my-5">Quotes</h1>
      <AddQuote onSubmit={handleAddQuote} onSort={handleSortQuotes} />
      <ListQuote
        quotes={quotes}
        onDelete={handleDeleteQuote}
        onLike={handleLikeQuote}
        onDislike={handleDislikeQuote}
      />
    </div>
  );
}

export default App;