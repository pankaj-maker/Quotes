export const quotesReducer = (state, action) => {
    switch (action.type) {
      case "add":
        // Create a new quote
        const quote = {
          title: action.payload,
          id: crypto.randomUUID(),
          likes: 0,
        };

        // Add to new state
        return [quote, ...state];
      case "delete":
        return state.filter((quote) => quote.id !== action.payload);
      case "like":
        return state.map((quote) =>
          quote.id === action.payload ? { ...quote, likes: quote.likes + 1 } : quote
        );
      case "dislike":
        return state.map((quote) =>
          quote.id === action.payload ? { ...quote, likes: quote.likes - 1 } : quote
        );
      case "sort":
        return [...state].sort((a, b) => b.likes - a.likes);
      default:
        return state;
    }
  };