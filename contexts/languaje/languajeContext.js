import { createContext } from "react";

const initialValue = "GB";

const LanguajeContext = createContext(initialValue);

export { initialValue, LanguajeContext };
