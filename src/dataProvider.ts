import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider(import.meta.env.VITE_JSON_SERVER_URL);

export default dataProvider;
