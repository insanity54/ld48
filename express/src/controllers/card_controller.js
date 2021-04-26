import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "name" ]
    static values = { index: Number }

    greet() {
        console.log(`Hello ${this.name}.`)
    }

    update() {
        console.log(`hand has been modified`)
    }

    get name() {
        return this.nameTarget.value
    }
}