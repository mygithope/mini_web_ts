class DrawOnMe {
  private canvas:HTMLCanvasElement
  private context:CanvasRenderingContext2D
  constructor() {
    const canvas = document.getElementById('app') as HTMLCanvasElement
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    this.canvas = canvas
    this.context = context
    this.drawRect()
  }
  //
  // Objective -- ( 01 ) --
  // learn how to draw a simple shape with CanvasRenderingContext2D y and x
  //
  drawRect() {
    this.context.fillRect(100,100,100,100)
    this.context.fillRect(100,250,100,100)
    this.context.fillRect(250,100,100,100)
    this.context.fillRect(250,250,100,100)
    this.context.fillRect(400,100,100,100)
    this.context.fillRect(400,250,100,100)
    this.context.fillRect(550,100,100,100)
    this.context.fillRect(550,250,100,100)
  }
}
// run class :
new DrawOnMe()

