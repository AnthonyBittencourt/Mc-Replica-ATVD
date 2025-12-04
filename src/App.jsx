import s from './App.module.css'
import tresLinhas from '../public/hamburger.png'
import menuLOGO from '../public/mcLOGO.png'

function App() {

  return (
    <>
      <main>
        <div className={s.menu}>
          <div className={s.opcaoMenu}>
            <img height={60} width={s.auto} src={tresLinhas}/>
            <img height={95} width={s.auto} src={menuLOGO}/>
          </div>

          <div className={s.botaoContainer}>
            <div className={s.botaoEntrar}>
              <h1>Entrar</h1>
            </div>
          </div>

        </div>
        <div className={s.s1}>


        </div>
        <div className={s.s2}>

        </div>
      </main>
    </>
  )
}

export default App
