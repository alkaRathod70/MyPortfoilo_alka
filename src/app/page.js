import Heropage from '@/Components/Heropage'
import Navbar from '@/Components/Navbar'
import { skills } from '@/Data/Mydata'

import Image from 'next/image'
import About from './About/page'

export default function Home() {
  return (
    <main>

     <div>
      <Heropage />
     </div>
      <About />
    </main>

      )
}
