/*
* This program is a vehicle class.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-25
*/

class Vehicle {
  // this is a  class.
  private _speed: number
  private _maxSpeed: number
  private _colour: string

  constructor (inicialColour: string, topspeed: number) {
    this._colour = inicialColour
    this._maxSpeed = topspeed
    this._speed = 0
  }

  public get speed () {
    return this._speed
  }

  public get maxSpeed () {
    return this._maxSpeed
  }

  public get colour () {
    return this._colour
  }

  public set speed (param: number) {
    this._speed = param
  }

  public set colour (param: string) {
    this._colour = param
  }

  public status () {
    console.log('Speed: ' + this._speed + '\nMaxSpeed: ' + this._maxSpeed +
                    + '\nColour: ' + this._colour)
  }

  public accelerate (accPow: number, accTime: number) {
    this._speed = (accPow * accTime) + this._speed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  public break (breakPow: number, breakTime: number) {
    this._speed = this._speed - (breakPow * breakTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}

class Bike extends Vehicle {
    private _cadense: number

    constructor (inicialColour: string, topspeed: number) {
        super(inicialColour, topspeed)
        this._cadense = 0
    }

  public get cadense () {
    return this._cadense
  }

  public set cadense (param: number) {
    this._cadense = param
    this.speed = this._cadense * 2
  }

    public accelerate(accPow){
        this.cadense = this.cadense + accPow
    }
}

class Truck extends Vehicle {
    private _licensePlate: string

    constructor (inicialColour: string, topspeed: number,
                 inicialPlate: string) {
        super(inicialColour, topspee)
    }
}

const fordFocus = new Vehicle('white', 'B40-C4RR0', 4, 200)

console.log('Created Ford focus\nStatus:\n')
fordFocus.status()

console.log('\nAccelerating, 10 of power for 10 sec.')
fordFocus.accelerate(10, 10)
console.log('New speed: ' + fordFocus.speed)

console.log('\nChanging colour to black:')
fordFocus.colour = 'black'
console.log('New colour:' + fordFocus.colour)

const ferrari = new Vehicle('red', 'VHD-35HU', 2, 400)

console.log('Created a Ferrari\nStatus:\n')
ferrari.status()

console.log('\nAccelerating, 100 of power for 4 sec.')
ferrari.accelerate(100, 4)
console.log('New speed: ' + ferrari.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
ferrari.accelerate(10, 10)
console.log('New speed: ' + ferrari.speed)

console.log('\nChanging license plate:')
ferrari.licensePlate = 'MY-GIRL'
console.log('New colour: ' + ferrari.licensePlate)

console.log('\nDone.')
