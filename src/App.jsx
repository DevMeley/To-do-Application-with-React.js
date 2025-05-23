import style from '../src/App.module.css'
import Input from './Components/Input'
import Header from './Components/Header'

function App() {
 const year = new Date().getFullYear();
  return (
    <div className={style.App}>
      <div className={style.container}>
        <Header />
        <Input />
      </div>
      <div className={style.footer}>
        &copy; {year} <a href="https://github.com/DevMeley">DevMeley</a>. All rights reserved.
      </div>
    </div>
  )
}

export default App
