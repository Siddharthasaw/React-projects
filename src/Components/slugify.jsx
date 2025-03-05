export const createSlug = (title) => {
    return title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  };