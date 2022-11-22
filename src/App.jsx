import { useState } from 'react'
import './App.css'
 /* Custom hooks */
import { useGetSynonyms } from './hooks/useGetSynonyms'

function App() {

  const [word, setWord] = useState('')
  const {isLoading, synonyms, getSynonyms, setSynonym} = useGetSynonyms()

  const handleFetchSynonym = (e) => {
    e.preventDefault()
    getSynonyms(word)
  }

  const handleSynonymClicked = (newWord) => {
    getSynonyms(newWord)
    setWord(newWord)
  }

  const handleClearInput = (e) => {
    e.preventDefault()
    setWord('')
    setSynonym(undefined)
  }
  
  return (
    <div className="App">
      <form onSubmit={handleFetchSynonym} autoComplete='off' className='flex gap-5 items-center'>
        <label htmlFor='word-input'>Your Word</label>
        <div className='relative input-wrapper'>
          <input id='word-input' className='outline-none ring-gray-500 focus:ring-blue-400 ring-1 p-1  relative'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <i className="fa fa-times absolute hidden bottom-[20%] left-[90%] text-gray-400 hover:text-gray-900 cursor-pointer"
            onClick={handleClearInput}
          aria-hidden="true"/>
        </div>
        
        <button> Find Synonyms </button>
      </form>
      {isLoading ?
        <div> Loading... </div> :
        <ul>
        { synonyms === undefined ?
         <div> Start searching.. </div> :
          synonyms.length > 0 ?
            synonyms.map((synonym, index) => {
                return <li className='cursor-pointer hover:text-red-500'
                        key={index}
                        onClick={() => handleSynonymClicked(synonym.word)}>
                          {synonym.word}
                        </li>  
            }) : <div> No results.. </div> 
        }
        
        
        </ul>
      }
      
      
    </div>
  )
}

export default App
