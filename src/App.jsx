import s from './App.module.css'
import tresLinhas from '../public/hamburger.png'
import menuLOGO from '../public/mcLOGO.png'
import { useEffect, useState } from 'react'


function App() {

  
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsTop(window.scrollY === 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <main>
        <nav className={`${s.menu} ${!isTop ? s.shrink : ""}`}>
          <div className={s.opcaoMenu}>
            <img height={60} width={s.auto} src={tresLinhas}/>
            <img height={95} width={s.auto} src={menuLOGO}/>
          </div>

          <div className={s.botaoContainer}>
            <div className={s.botaoEntrar}>
              <h1>Entrar</h1>
            </div>
          </div>

        </nav>
        <div className={s.s1}>


        </div>
        <div className={s.s2}>

        </div>
      </main>
    </>
  )
}

export default App
