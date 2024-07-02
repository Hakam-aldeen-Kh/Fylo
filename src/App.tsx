import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Button } from "@material-tailwind/react";
export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Button className="bg-red-400">Button</Button>
      <Footer />
    </>
  );
}
