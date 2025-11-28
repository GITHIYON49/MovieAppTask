import { Navbar,Footer } from "./components";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center bg-blue-900 min-h-[90vh]">
        <Allroutes />
      </main>
      <Footer/>
    </>
  );
}

export default App;
