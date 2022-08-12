import EN from "./en.json";
import ES from "./es.json";

const getWordings = (lan) => {
  const mapper = {
    ES: ES,
    EN: EN,
    GB: EN,
  };

  return mapper[lan] || mapper.en;
};

export default getWordings;
