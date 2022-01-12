/*
* This program is a bike class.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-25
*/

import { Vehicle } from "./Vehicle"

export class Bike extends Vehicle {
  // This class is a bike class
  private _cadense: number

  constructor (inicialColour: string, topspeed: number) {
    super(inicialColour, topspeed)
    this._cadense = 0
  }

  public get cadense () {
    // get cadense
    return this._cadense
  }

  public set cadense (param: number) {
    // set cadense
    this._cadense = param
    this.speed = this._cadense * 2
  }

  public accelerate (accPow: number) {
    // Accelerate
    this.cadense = this.cadense + accPow
  }

  public ringBell () {
    // Prints bell sound
    console.log('\nDing ding!\n')
  }

  public status () {
    // Prints status of bike
    super.status()
    console.log('Cadense: ' + this._cadense)
  }
}
