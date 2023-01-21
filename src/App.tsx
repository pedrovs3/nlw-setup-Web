import './assets/styles/styles.css'
import './lib/dayjs';
import { Plus } from 'phosphor-react'

import {HabitDay} from "./components/HabitDay";

import logoImage from './assets/logo.svg'
import {Header} from "./components/Header";
import {SummaryTable} from "./components/SummaryTable";

export function App() {
  return (
      <div className="w-screen h-screen flex justify-center items-center ">
        <div className={"w-full max-width-5xl px-6 flex-col gap-16"}>
          <Header/>
          <SummaryTable/>
        </div>
      </div>

  )
}

// export default App
