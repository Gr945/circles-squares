import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const [circle, setCircle] = useState(false)
  const [square, setSquare] = useState(false)

  const [red, setRed] = useState(false)
  const [blue, setBlue] = useState(false)
  const [columnNumber, setColumnNumber] = useState(1)

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [filterableState, setFilterableState] = useState(state || [])

  useEffect (() => {
    if(circle && square) setFilterableState(state)
    if(circle && !square) setFilterableState(state.filter((el) => el.circle))
    if(!circle && square) setFilterableState(state.filter((el) => !el.circle))
    if(!circle && !square) setFilterableState([])
    if(red) setFilterableState(filterableState.filter((el) => el.color === 'red'))
    if(blue) setFilterableState(filterableState.filter((el) => el.color === 'blue'))

  },[circle, square, red])



  return (
    <div className="App">
      <header className="App-header">
        <h1>Круги и квадраты, v.1.0</h1>
      </header>
      <div className='filter-circle-square'>
        <div className='filter-block'>
          <input id='circles' className='filter-figures' type='checkbox' onChange={() => {
            setCircle(!circle)
          }} checked={circle} />
          <label for='circles' style={{ fontSize: '24px' }}>Круги</label>
        </div>
        <div className='filter-block'>
          <input id='squares' className='filter-figures' type='checkbox' onChange={() => {
            setSquare(!square)
          }} checked={square} />
          <label for='squares' style={{ fontSize: '24px' }}>Квадраты</label>
        </div>
      </div>


      <div className='content' style={{ display: 'grid', gridTemplateColumns: `repeat(${columnNumber ? columnNumber : 1}, 1fr)` }}>
        {!!filterableState.length ? filterableState.map((el) => <div className='container' style={{
          borderRadius: `${el.circle ? '50%' : '0'}`,
          background: `${el.color}`
        }}></div>) : <span className='not-length'>выбранных елементов нет</span>}
        <div className='left-panel'>
        <div className='colomn-number-block'>
            
            <input  className='colomn-number' type='checkbox' onChange={(e) => {
              setRed(e.target.value)
            }} defaultValue={red} />
            <label>красные</label>
          </div>
          

          <div className='colomn-number-block'>
            <label>колонок</label>
            <input className='colomn-number' type='number' onChange={(e) => {
              setColumnNumber(e.target.value)
            }} defaultValue={columnNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
