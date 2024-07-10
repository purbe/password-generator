import {useCallback, useEffect, useRef, useState} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber] = useState("false")
  const [character,setCharacter] = useState("false")
  const [password,setPassword] = useState("")

    //ref hook
    const passwordRef = useRef(null)

    const passwordGenrate = useCallback(() => {

        let pwd=''
        let str='QWERTYUIOPLKJHGFDSAZXCVBNMzxcvbnmlkjhgfdsaqwertyuiop'
        if(number) str += '1234567890';
        if(character) str +='~@#$*{}!^&';
        for(let i= 0; i<length ; i++){
            let char = Math.floor(Math.random() * str.length+1)
            pwd += str.charAt(char)
        }
        setPassword(pwd)
    },[length, number, character])

    const copyPasswordCLipBoard = () => {
      window.navigator.clipboard.writeText(password)
    }

useEffect(()=>{
    passwordGenrate();
},[length, number, character, passwordGenrate])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-700">
        <h1 className='text-white text-center my-3'>
            Password Generator
        </h1>
          <div className = 'flex shadow rounded-lg overflow-hidden mb-4'>
            <input
                type="text"
                value={password}
                className='outline-none w-full py-1 px-3'
                placeholder='password'
                readOnly
                ref={passwordRef}
            />
              <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              onClick={copyPasswordCLipBoard}>
                  copy
              </button>

        </div>
          <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                  <input
                      type='range'
                      value={length}
                      className='cursor-pointer'
                      min={8}
                      max={100}
                      onChange={(e) => {
                          setLength(e.target.value)
                      }}
                  />
                  <label>
                      Length: {length}
                  </label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input
                      type='checkbox'
                      defaultChecked={number}
                      id='numberInput'
                      onChange={() => {
                          setNumber((prev) => !prev);
                      }}
                  />
                  <label htmlFor='numberInput'>
                      Number
                  </label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input
                      type='checkbox'
                      defaultChecked={character}
                      id='characterInput'
                      onChange={() => {
                          setCharacter((prev) => !prev);
                      }}
                  />
                  <label htmlFor='characterInput'>
                      Character
                  </label>
              </div>

          </div>
      </div>
    </>
  )
}

export default App
