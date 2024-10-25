import style from '../src/App.module.css'
import Input from './Components/Input'
import Header from './Components/Header'

function App() {
 
  return (
    <div className={style.App}>
      <div className={style.container}>
        <Header />
        <Input />
      </div>
    </div>
  )
}

export default App
