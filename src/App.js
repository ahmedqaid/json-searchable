import { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

const CAT_ERROR = "/cat-error.jpeg";
const TNJ_ERROR = "/TnJ-error.png";

function App() {
  const [jsonField, setJsonField] = useState();
  const [searchField, setSearchField] = useState();
  const [result, setResult] = useState();

  const submit = (e) => {
    e.preventDefault();
    let parsed;
    try {
      parsed = JSON.parse(jsonField);
    } catch {
      Swal.fire({
        text: "Invalid JSON Format",
        imageUrl: CAT_ERROR,
        imageHeight: 300,
        imageAlt: "Cat Error",
      });
    }
    let cmd = searchField;
    let list = cmd.split("[").join(".").split("]").join(".").split(".");

    for (let i of list) {
      if (!i) {
      } else {
        parsed = parsed[i];
      }
    }
    if (!parsed) {
      Swal.fire({
        text: "UNDEFINED",
        imageUrl: TNJ_ERROR,
        imageHeight: 300,
        imageAlt: "TNJ Error",
      });
    }
    setResult(JSON.stringify(parsed));
  };

  const info = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "How to use? 🤔",
      html: "Simply paste a valid json,<br>and start typing out variables",
    });
  };

  return (
    <div className="App p-8">
      <div className="flex justify-center">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
          JSON Searchable
        </h1>
        <input
          onClick={info}
          type="image"
          src="/information.png"
          className="absolute right-8 w-12 h-12"
        />
      </div>
      <form onSubmit={submit}>
        <div className="flex justify-center m-8">
          <div className="mb-3 xl:w-4/6">
            <div class="mb-6">
              <label
                HtmlFor="searchField"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your "Query"
              </label>
              <input
                type="text"
                id="searchField"
                name="searchField"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-1"
                placeholder=">"
                onChange={(e) => setSearchField(e.target.value)}
                required
              />
              <input
                type="text"
                id="result"
                name="result"
                value={result}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Result"
                required
                disabled
              />
            </div>

            <textarea
              className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              id="jsonField"
              name="jsonField"
              rows="30"
              placeholder="Do what you do best here, copy-paste 😄"
              value={jsonField}
              onChange={(e) => setJsonField(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
