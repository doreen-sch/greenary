import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";

const fetcher = async (url) => {
  const result = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!result.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await result.json();
    error.status = result.status;
    throw error;
  }
  return result.json();
};

export default function App({ Component, pageProps }) {
  const { data: plants, isLoading, error } = useSWR(`/api/plants`, fetcher);

  if (isLoading) {
    return <h1>is Loading…</h1>;
  }

  if (!plants || error) {
    return <h1>Error!</h1>;
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} plants={plants} />
      </SWRConfig>
    </>
  );
}
