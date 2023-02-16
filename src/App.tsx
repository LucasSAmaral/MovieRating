import Header from "./components/header";
import Footer from "./components/footer/Footer";
// import Instructions from "./instructions";
import "./App.css";
import Movies from "./components/movie";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        {/* <Instructions /> */}
        <Movies />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
