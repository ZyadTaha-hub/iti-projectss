import Navbar from'../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
 import { useState } from 'react';
export default function Home(){
    const [counter, setCounter] = useState(0);
    function increase(){
    setCounter (counter+1);      
    }
return (
<>
<Navbar />
<h1 className='bg-info'>count{counter}</h1>
<button className='increase' onClick={increase}>increase button</button>
<Hero />
<About />

</>

)



}