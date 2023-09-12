import { useState } from 'react'
import './App.css'
import EmployeeForm from './components/EmployeeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <EmployeeForm/>
    </div>
     {/* <div className='bg-slate-500 flex gap-10 justify-center'>
      <div>
        vivek
      </div>
      <div>
        singh
      </div>
      <div>
        React
      </div>
      <div>
        Developer
      </div>
     </div> */}
    </>
  )
}

export default App
