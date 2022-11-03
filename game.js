const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 50
        this.height = 50
    }
    draw() {
      c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }


    update() {
        this.draw()
        this.position.y  += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

class Platform {
    constructor({x, y, width, height}) {
        this.position = {
            x: x,
            y: y
        }
        this.width = width
        this.height = height

    }
    draw() {
        c.fillStyle = '#303c54';
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}


const player = new Player()
const platforms = [new Platform({x: 0, y: 450, width: 400, height: 150}),
                    new Platform({x:400, y: 450, width: 400, height: 150}),
                    new Platform({x:800, y: 450, width: 400, height: 150}),
                    new Platform({x:1200, y: 450, width: 400, height: 150}),
                    new Platform({x:1600, y: 450, width: 400, height: 150}),
                    new Platform({x:2000, y: 450, width: 400, height: 150}),
                    new Platform({x:2400, y: 450, width: 400, height: 150}),
                    new Platform({x:2800, y: 450, width: 400, height: 150}),
                    new Platform({x:3200, y: 450, width: 400, height: 150}),
                    new Platform({x:3600, y: 450, width: 400, height: 150}),
                    new Platform({x:4000, y: 450, width: 400, height: 150}),
                    new Platform({x:4400, y: 450, width: 400, height: 150}),
                    new Platform({x:4800, y: 450, width: 400, height: 150}),
                    new Platform({x:5600, y: 450, width: 400, height: 150}),
                    new Platform({x:6000, y: 450, width: 400, height: 150}),
                    new Platform({x:6400, y: 450, width: 400, height: 150}),
                    new Platform({x:6800, y: 450, width: 400, height: 150}),


                    new Platform({x: 400, y: 250, width: 150, height: 40}),
                    new Platform({x: 800, y: 200, width: 150, height: 40}),
                    new Platform({x: 1200, y: 350, width: 150, height: 40}),
                    new Platform({x: 1600, y: 200, width: 150, height: 40}),
                    new Platform({x: 2000, y: 400, width: 150, height: 40}),
                    new Platform({x: 2400, y: 200, width: 150, height: 40}),
                    new Platform({x: 2800, y: 200, width: 150, height: 40})
                ]

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

let scrollOffset = 0

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = '#bde0fe'
    c.fillRect(0, 0, canvas.width, canvas.height)
    platforms.forEach(platform => {
        platform.draw()
    })
    player.update()

    if (keys.right.pressed && 
        player.position.x <400) {
        player.velocity.x = 7
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -7
    } else {player.velocity.x = 0
    
        if (keys.right.pressed) {
            scrollOffset += 7
            platforms.forEach(platform => {
                platform.position.x -= 7
            })
            
        }
        if (keys.left.pressed) {
            scrollOffset -=5
            platforms.forEach(platform => {
                platform.position.x += 5
            })
            
        }
    } 
    if (scrollOffset > 2000) {
      console.log("you win")
    } 

    //player detects platform
    platforms.forEach(platform => {
     if (player.position.y + player.height
        <= platform.position.y && 
        player.position.y + player.height + player.velocity.y 
        >= platform.position.y  && 
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })
}
animate()

//Movement check
addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        //left
        case 65:
        keys.left.pressed = true
        break
        //right
        case 68:
            keys.right.pressed = true
        break
        //up
        case 87:
            player.velocity.y -= 14
        break
    }
})

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        //left
        case 65:
            keys.left.pressed = false
        break

        //right
        case 68:
            keys.right.pressed = false
        break
        //up
     //   case 87:
       //     player.velocity.y -= 8
    //    break
    }
})