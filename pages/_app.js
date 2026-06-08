import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import { Comfortaa } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

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
  const router = useRouter();

  if (isLoading) {
    return <h1>is Loading…</h1>;
  }

  if (!plants || error) {
    return <h1>Error!</h1>;
  }

  return (
    <div className={comfortaa.variable}>
      <GlobalStyle />
      <Toaster
        toastOptions={{
          success: {
            icon: null,
            duration: 4000,
            style: {
              background: "var(--secondary-green-50)",
              textAlign: "center",
            },
          },
          error: {
            icon: null,
            duration: 4000,
            style: {
              background: "var(--secondary-red-100)",
              textAlign: "center",
            },
          },
        }}
      />
      <Header />
      <SWRConfig value={{ fetcher }}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} plants={plants} key={router.pathname} />
        </AnimatePresence>
      </SWRConfig>
    </div>
  );
}
