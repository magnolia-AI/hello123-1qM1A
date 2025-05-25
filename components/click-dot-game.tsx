'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Dot {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
}

export default function ClickDotGame() {
  const [dots, setDots] = useState<Dot[]>([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [highScore, setHighScore] = useState(0)

  const createDot = useCallback(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff']
    const gameArea = document.getElementById('game-area')
    if (!gameArea) return null

    const rect = gameArea.getBoundingClientRect()
    const size = Math.random() * 40 + 20
    
    return {
      id: Math.random(),
      x: Math.random() * (rect.width - size),
      y: Math.random() * (rect.height - size),
      size,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 2 + 1
    }
  }, [])

  const startGame = () => {
    setScore(0)
    setTimeLeft(30)
    setGameActive(true)
    setGameOver(false)
    setDots([])
  }

  const endGame = useCallback(() => {
    setGameActive(false)
    setGameOver(true)
    setDots([])
    if (score > highScore) {
      setHighScore(score)
      localStorage.setItem('clickDotHighScore', score.toString())
    }
  }, [score, highScore])

  const clickDot = (dotId: number) => {
    setDots(prev => prev.filter(dot => dot.id !== dotId))
    setScore(prev => prev + 10)
  }

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('clickDotHighScore')
    if (saved) {
      setHighScore(parseInt(saved))
    }
  }, [])

  // Game timer
  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      endGame()
    }
  }, [gameActive, timeLeft, endGame])

  // Spawn dots
  useEffect(() => {
    if (!gameActive) return

    const spawnInterval = setInterval(() => {
      const newDot = createDot()
      if (newDot) {
        setDots(prev => [...prev, newDot])
      }
    }, 1000)

    return () => clearInterval(spawnInterval)
  }, [gameActive, createDot])

  // Move dots and remove old ones
  useEffect(() => {
    if (!gameActive) return

    const moveInterval = setInterval(() => {
      setDots(prev => prev
        .map(dot => ({
          ...dot,
          y: dot.y + dot.speed
        }))
        .filter(dot => dot.y < 400) // Remove dots that fall off screen
      )
    }, 50)

    return () => clearInterval(moveInterval)
  }, [gameActive])

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Click the Dots!
        </CardTitle>
        <div className="flex justify-center gap-4 mt-4">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Score: {score}
          </Badge>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Time: {timeLeft}s
          </Badge>
          <Badge variant="outline" className="text-lg px-3 py-1">
            Best: {highScore}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {!gameActive && !gameOver && (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">
              Click the colorful dots as fast as you can! You have 30 seconds to get the highest score.
            </p>
            <Button 
              onClick={startGame}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
            >
              Start Game
            </Button>
          </div>
        )}

        {gameOver && (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
            <p className="text-xl mb-2">Final Score: {score}</p>
            {score === highScore && score > 0 && (
              <p className="text-green-600 font-semibold mb-4">🎉 New High Score!</p>
            )}
            <Button 
              onClick={startGame}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
            >
              Play Again
            </Button>
          </div>
        )}

        {gameActive && (
          <div 
            id="game-area"
            className="relative w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden cursor-crosshair"
          >
            {dots.map(dot => (
              <div
                key={dot.id}
                className="absolute rounded-full cursor-pointer transform transition-transform hover:scale-110 shadow-lg animate-pulse"
                style={{
                  left: dot.x,
                  top: dot.y,
                  width: dot.size,
                  height: dot.size,
                  backgroundColor: dot.color,
                  boxShadow: `0 0 20px ${dot.color}40`
                }}
                onClick={() => clickDot(dot.id)}
              />
            ))}
            
            {dots.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
                Dots will appear here...
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}




