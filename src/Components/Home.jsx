import React, { useState } from 'react'
import Square from './Square'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
 
    const [index,setIndex] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const winner =()=>{
        const winnerlogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for (let logic of winnerlogic){
            const [a,b,c] = logic;
            if(index[a]!==null && index[a]===index[b] && index[a]===index[c]){
                return index[a]
            }
            

        }
        return false
    }
    
    const isWinner = winner();
    const handleClick =(e)=>{
        if (index[e]!== null ){
            return;
        }
        const ind2 = [...index];
      ind2[e]= isX ? 'X':'O';
      setIndex(ind2);
      setIsX(!isX);

    }
    const handleReset =()=>{
        setIndex(Array(9).fill(null));
    }

  return (
    <div className='home'>
    {isWinner ? <p>{isWinner} won the game{" "}
    <button onClick={handleReset}>Play Again</button></p> : 
    <h5>
    <h2 className='player_Color'>Player <span className='span'>{isX ?'X':'O'}</span> turn</h2>
    <div className="border_row">
       <Square value={index[0]} onClick={()=>handleClick(0)} />
       <Square value={index[1]} onClick={()=>handleClick(1)}/>
       <Square value={index[2]} onClick={()=>handleClick(2)}/>
      </div>
      <div className="border_row">
      <Square value ={index[3]} onClick={()=>handleClick(3)}/>
      <Square value = {index[4]} onClick={()=>handleClick(4)}/>
      <Square value= {index[5]} onClick={()=>handleClick(5)}/></div>
      <div className="border_row">
      <Square value ={index[6]} onClick={()=>handleClick(6)}/>
      <Square value={index[7]} onClick={()=>handleClick(7)}/>
      <Square value={index[8]} onClick={()=>handleClick(8)}/>
      </div>
      
      </h5>
    }
    <Link to="/About">About</Link>
    
    </div>
  )
}

export default Home
