import { Dictionary } from "./components/Dictionary";

function App() {
  return (
    <>
      <div className="flex justify-center my-20">
        <div className="border border-black w-132 min-h-192 rounded-3xl bg-gradient-to-bl from-green-300 to-yellow-300 ">
          <h1 className="font-bold text-2xl p-5 text-center">DICTIONARY APP</h1>
          <div>
            <Dictionary />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
