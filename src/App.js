import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [columnNumber, setColumnNumber] = useState(1)

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [filterCollapce, setFilterCollapce] = useState(
    {
      circle: false, square: false, red: false, blue: false,
      green: false, yellow: false, all: false, light: false, dark: false
    }
  )

  const [filterableState, setFilterableState] = useState([])

  useEffect(() => {
    let x = state;
    if (!filterCollapce.red) { x = x.filter((el) => el.color !== 'red' && el.color !== 'rosybrown') }
    if (!filterCollapce.blue) { x = x.filter((el) => el.color !== 'blue' && el.color !== 'blueviolet') }
    if (!filterCollapce.green) { x = x.filter((el) => el.color !== 'green' && el.color !== 'greenyellow') }
    if (!filterCollapce.yellow) { x = x.filter((el) => el.color !== 'yellow' && el.color !== 'yellowgreen') }
    if (!filterCollapce.square) { x = x.filter((el) => el.circle) }
    if (!filterCollapce.circle) { x = x.filter((el) => !el.circle) }
    if (!filterCollapce.all && !filterCollapce.dark && !filterCollapce.light) { x = [] }
    if (!filterCollapce.dark && filterCollapce.light && !filterCollapce.all) { x = x.filter((el) => !el.dark) }
    if (filterCollapce.dark && !filterCollapce.light && !filterCollapce.all) { x = x.filter((el) => el.dark) }
    setFilterableState(x)
  }, [filterCollapce])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Круги и квадраты, v.1.0</h1>
      </header>
      <div className='filter-circle-square'>
        <div className='filter-block'>
          <input id='circles' className='filter-figures' type='checkbox' onChange={() => {
            setFilterCollapce({ ...filterCollapce, circle: !filterCollapce.circle })
          }} checked={filterCollapce.circle} />
          <label for='circles' style={{ fontSize: '24px' }}>Круги</label>
        </div>
        <div className='filter-block'>
          <input id='squares' className='filter-figures' type='checkbox' onChange={() => {
            setFilterCollapce({ ...filterCollapce, square: !filterCollapce.square })
          }} checked={filterCollapce.square} />
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
            <input className='colomn-number' type='checkbox' onChange={() => {
              setFilterCollapce({ ...filterCollapce, red: !filterCollapce.red })
            }} defaultValue={filterCollapce.red} style={{background: 'red', color: 'black'}}/>
            <label>красные</label>
          </div>

          <div className='colomn-number-block'>
            <input className='colomn-number' type='checkbox' onChange={() => {
              setFilterCollapce({ ...filterCollapce, green: !filterCollapce.green })
            }} defaultValue={filterCollapce.green} />
            <label>зелёный</label>
          </div>

          <div className='colomn-number-block'>
            <input className='colomn-number' type='checkbox' onChange={() => {
              setFilterCollapce({ ...filterCollapce, blue: !filterCollapce.blue })
            }} defaultValue={filterCollapce.blue} />
            <label>синий</label>
          </div>

          <div className='colomn-number-block'>
            <input className='colomn-number' type='checkbox' onChange={() => {
              setFilterCollapce({ ...filterCollapce, yellow: !filterCollapce.yellow })
            }} defaultValue={filterCollapce.yellow} />
            <label>жёлтый</label>
          </div>

          <div>
            <div className='colomn-number-block'>
              <input className='colomn-number' type='checkbox' onChange={() => {
                setFilterCollapce({ ...filterCollapce, all: !filterCollapce.all })
              }} defaultValue={filterCollapce.all} />
              <label>Все</label>
            </div>
            <div className='colomn-number-block'>
              <input className='colomn-number' type='checkbox' onChange={() => {
                setFilterCollapce({ ...filterCollapce, dark: !filterCollapce.dark })
              }} defaultValue={filterCollapce.dark} />
              <label>Тёмные</label>
            </div>
            <div className='colomn-number-block'>
              <input className='colomn-number' type='checkbox' onChange={() => {
                setFilterCollapce({ ...filterCollapce, light: !filterCollapce.light })
              }} defaultValue={filterCollapce.light} />
              <label>Светлые</label>
            </div>

          </div>

          <div className='colomn-number-block'>
            <label>колонок</label>
            <input className='colomn-number input-decoration' type='number' onChange={(e) => {
              setColumnNumber(e.target.value)
            }} defaultValue={columnNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
