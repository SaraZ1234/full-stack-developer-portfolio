export const createCursorFollower = () => {
  if (typeof window === 'undefined') return

  const follower = document.createElement('div')
  follower.className = 'cursor-follower'
  follower.style.cssText = `
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border: 2px solid rgba(0, 217, 255, 0.5);
    border-radius: 50%;
    z-index: 9999;
    transition: opacity 0.3s ease;
    mix-blend-mode: screen;
  `
  document.body.appendChild(follower)

  let mouseX = 0
  let mouseY = 0
  let followerX = 0
  let followerY = 0

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  const animate = () => {
    followerX += (mouseX - followerX) * 0.15
    followerY += (mouseY - followerY) * 0.15

    follower.style.left = followerX - 15 + 'px'
    follower.style.top = followerY - 15 + 'px'

    requestAnimationFrame(animate)
  }

  animate()

  return () => follower.remove()
}

export const createFloatingElements = () => {
  if (typeof window === 'undefined') return

  const container = document.createElement('div')
  container.className = 'floating-elements'
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  `

  for (let i = 0; i < 5; i++) {
    const element = document.createElement('div')
    const size = Math.random() * 200 + 100
    const duration = Math.random() * 20 + 15
    const delay = Math.random() * 5

    element.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border: 1px solid rgba(0, 217, 255, 0.1);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${duration}s ease-in-out ${delay}s infinite;
    `
    container.appendChild(element)
  }

  document.body.appendChild(container)
  return () => container.remove()
}

export const createGridPattern = () => {
  if (typeof window === 'undefined') return

  const canvas = document.createElement('canvas')
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.03;
  `

  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  if (!ctx) return () => canvas.remove()

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const gridSize = 40
  ctx.strokeStyle = '#00d9ff'
  ctx.lineWidth = 0.5

  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
    ctx.stroke()
  }

  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
    ctx.stroke()
  }

  return () => canvas.remove()
}

export const createMouseTracker = () => {
  if (typeof window === 'undefined') return

  let mouseX = 0
  let mouseY = 0

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  document.addEventListener('mousemove', handleMouseMove)

  return {
    getPosition: () => ({ x: mouseX, y: mouseY }),
    cleanup: () => document.removeEventListener('mousemove', handleMouseMove),
  }
}
