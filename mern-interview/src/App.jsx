import { useState } from 'react'

import './App.css'

function App() {
  const [circles, setCircles] = useState([])
  const [isIntersected, setIsIntersected] = useState(false)

  const checkIntersection = (circle1, circle2) => {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    //|r1-r2|<=d<=r1+r2
    return Math.abs(circle1.radius - circle2.radius) <= distance && distance <= (circle1.radius + circle2.radius);
  }

  const generateRandomRadius = () => Math.floor(Math.random() * (200 - 20 + 1)) + 20;

  const handleClick = (e) => {
    const radius = generateRandomRadius();
    const newCircle = {x: e.clientX, y: e.clientY, radius}

    

    if(circles.length === 2){
      setCircles([])
      setIsIntersected(false);
    }else{
      const updatedCircles = [...circles, newCircle]
    
      if(updatedCircles.length === 2 && checkIntersection(updatedCircles[0],updatedCircles[1])){
        setIsIntersected(true);
      }else{
        setIsIntersected(false);
      }

      setCircles(updatedCircles);
    }
};

  return (
    <>
      <div className='viewport' 
      style={{backgroundColor: isIntersected ? 'red' : 'green'}}
      onClick={handleClick}
      
      >

        <h1>Hello</h1>
        {circles.map((circle, index) => {
          return (
            <div className='circle'
              key={index}
              style={{
                width: circle.radius * 2,
                height: circle.radius * 2,
                left: circle.x - circle.radius,
                top: circle.y - circle.radius,
              }}
            ></div>
          )
        })}
      </div>
    </>
  )
}

export default App
