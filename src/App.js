import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions'

function App() {
  const myState = useSelector((state) => state.counter)
  const dispatch = useDispatch

  return (
    <div className='container'>
      <h1>Increment/Decrement Counter</h1>
      <h2>Using React and Redux</h2>

      <div className='quantity'>
        <a
          onClick={() => dispatch(incNumber())}
          className='quantity__minus'
          title='Increment'
        >
          <span> + </span>
        </a>
        <input
          name='quantity'
          type='text'
          className='quantity__input'
          value={myState}
        />
        <a
          onClick={() => dispatch(decNumber())}
          className='quantity__plus'
          title='Decrement'
        >
          <span> - </span>
        </a>
      </div>
    </div>
  )
}

export default App
