/*
* This program is a vehicle class.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-25
*/

export class Vehicle {
  // this is a Vehicle class.
  protected _speed: number
  protected _maxSpeed: number
  private _colour: string

  constructor (inicialColour: string, topspeed: number) {
    this._colour = inicialColour
    this._maxSpeed = topspeed
    this._speed = 0
  }

  public get speed () {
    // get speed
    return this._speed
  }

  public get maxSpeed () {
    // get maxSpeed
    return this._maxSpeed
  }

  public get colour () {
    // get colour
    return this._colour
  }

  public set speed (param: number) {
    // set speed
    this._speed = param
  }

  public set colour (param: string) {
    // set colour
    this._colour = param
  }

  public status () {
    // Prints the status.
    console.log('Speed: ' + this._speed + '\nMaxSpeed: ' + this._maxSpeed +
                    '\nColour: ' + this._colour)
  }

  public accelerate (accPow: number, accTime: number) {
    // Accelerates
    this._speed = (accPow * accTime) + this._speed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  public break (breakPow: number, breakTime: number) {
    // Breaks
    this._speed = this._speed - (breakPow * breakTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}
