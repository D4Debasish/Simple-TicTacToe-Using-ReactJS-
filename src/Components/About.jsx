import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
function About() {
  return (
    <div>
      <div className="xyz">
      <h3>Welcome to Debasish's ReactJS Tic Tac Toe Game!

      Hello and thank you for exploring this Tic Tac Toe game developed by Debasish using the ReactJS library. This classic game is designed to provide you with an enjoyable and interactive experience while showcasing the capabilities of ReactJS in building intuitive and responsive user interfaces.
      
      About the Game:
      Tic Tac Toe is a timeless game that has entertained people of all ages for generations. The objective is simple: players take turns marking 'X' or 'O' in a 3x3 grid. The first player to align three of their symbols horizontally, vertically, or diagonally wins the game. It's a fun and strategic game that challenges your thinking and planning skills.
      
      Features:
      
      User-Friendly Interface: The game boasts a clean and user-friendly interface, making it easy to understand and play.
      Responsive Design: Built with ReactJS, this game is responsive and adapts seamlessly to different screen sizes, ensuring a smooth gaming experience on various devices.
      Interactive Gameplay: Enjoy a smooth and interactive gameplay experience with real-time updates and clear indications of game status, turns, and winner announcements.
      Game History: This Tic Tac Toe game also tracks the game's history, allowing players to revisit their previous moves and strategies.
      How to Play:
      To start a game, simply select your preferred symbol ('X' or 'O') and take turns making your move by clicking on the grid squares. The game automatically detects a win, a draw, or when the game is over, providing a clear indication of the winner.
      
      About the Developer - Debasish:
      Debasish is passionate about web development and enjoys exploring new technologies. This project using ReactJS demonstrates Debasish's skills in building interactive web applications that are both engaging and functional.
      
      Acknowledgments:
      This project wouldn't have been possible without the incredible resources available within the ReactJS community and the support from fellow developers and mentors.
      
      Thank You for Playing:
      Thank you for choosing Debasish's ReactJS Tic Tac Toe game. Have fun, challenge your friends, and enjoy this timeless classic brought to life with the power of ReactJS!
      
      Feel free to customize this about section further to better fit your personal style, add any additional features, or highlight specific technical aspects of your project!</h3>
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}

export default About
