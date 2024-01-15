import { useCallback, useState } from 'react'

function App() {
  const [length, getLength] = useState(8)
  const [numsAllowed, setNumsAllowed] = useState(true)
  const [charsAllowed, setCharsAllowed] = useState(true)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numsAllowed) str += '0123456789';
    if(charsAllowed) str += '`~!@#$%^&*()-_=+[{]};:,<.>/?|';

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, numsAllowed, charsAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center text-3xl mb-1'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input value={password} className='outline-none w-full py-1 mb-4 px-3 rounded-lg hover:cursor-pointer' type="text" placeholder='Password' readOnly/>
        </div>
      </div>
    </>
  )
}

export default App
