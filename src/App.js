import { useState } from 'react'
import Swal from 'sweetalert2'
import './App.css'

const CAT_ERROR = '/cat-error.jpeg'
const TNJ_ERROR = '/TnJ-error.png'

function App() {
  const [jsonField, setJsonField] = useState()
  const [searchField, setSearchField] = useState()
  const [result, setResult] = useState()

  const submit = (e) => {
    e.preventDefault()
    let parsed
    try {
      parsed = JSON.parse(jsonField)
    } catch {
      Swal.fire({
        text: 'Invalid JSON Format',
        imageUrl: CAT_ERROR,
        imageHeight: 300,
        imageAlt: 'Cat Error',
      })
    }
    let cmd = searchField
    let list = cmd.split('[').join('.').split(']').join('.').split('.')

    for (let i of list) {
      if (!i) {
      } else {
        parsed = parsed[i]
      }
    }
    if (!parsed) {
      Swal.fire({
        text: 'UNDEFINED',
        imageUrl: TNJ_ERROR,
        imageHeight: 300,
        imageAlt: 'TNJ Error',
      })
    }
    setResult(JSON.stringify(parsed))
  }

  const info = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'How to use? 🤔',
      html: 'Simply paste a valid json,<br>and start typing out variables',
    })
  }

  return (
    <div className="App mx-auto p-8 md:max-w-3xl 2xl:max-w-6xl">
      <div className="flex justify-center">
        <h1 className="hidden text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:block sm:text-5xl lg:text-6xl">
          JSON Searchable
        </h1>
        <h1 className="block w-full text-left text-4xl font-extrabold tracking-tight text-slate-900 sm:hidden sm:text-5xl lg:text-6xl">
          JSON <br />
          Searchable
        </h1>
        <input
          onClick={info}
          type="image"
          src="/information.png"
          className="absolute right-8 h-12 w-12"
        />
      </div>
      <form onSubmit={submit}>
        <div className=" justify-center sm:m-8">
          <div className="mb-3 ">
            <div class="mb-6">
              <label
                HtmlFor="searchField"
                class="mb-2 block py-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300 sm:py-0 sm:text-center"
              >
                Your "Query"
              </label>
              <input
                type="text"
                id="searchField"
                name="searchField"
                class="mb-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder=">"
                onChange={(e) => setSearchField(e.target.value)}
                required
              />
              <input
                type="text"
                id="result"
                name="result"
                value={result}
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Result"
                required
                disabled
              />
            </div>

            <textarea
              className="
              form-control
              m-0
              block
              w-full
              rounded
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
            "
              id="jsonField"
              name="jsonField"
              rows="30"
              placeholder="Do what you do best here, copy-paste 😄"
              value={jsonField}
              onChange={(e) => setJsonField(e.target.value)}
            ></textarea>
          </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
        </div>
      </form>
    </div>
  )
}

export default App
