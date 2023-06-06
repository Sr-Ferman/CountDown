import Title from '../src/components/Title';

import Counter from '../src/components/Counter';

import WebDev from '../src/assets/WebDev.jpg'
import useCountdown from '../src/hooks/useCountdown';

import './App.css'

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00");
 
  return (
    <div className="App" style={{ backgroundImage: `url(${WebDev})` }}>
      <div className="container">
       <Title title= "Contagem regressiva para Arrumar um emprego na área de DEV. "/>
        <div className="countdown-container">
          <Counter title= "Dias" number={day}/>
          <Counter title= "Horas" number={hour}/>
          <Counter title= "Minutos" number={minute}/>
          <Counter title= "Segundos" number={second}/>
          </div>
        </div>
      </div>
    
  )
}

export default App
