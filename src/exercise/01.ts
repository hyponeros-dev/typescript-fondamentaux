/* eslint-disable @typescript-eslint/no-unused-vars */
// Les Types de bases
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Créer une fonction `sayHello` qui prend un argument `name` de type `string`
// cette fonction retournera un string "Hello Mike" si l'argument est Mike
// 🤖 affiche le resultat de cette fonction dans le navigateur grace à
// `displayText(`${sayHello('Mike')}`)`

function sayHello(name: string): string {
  return `Hello ${name}`
}
// ⛏️ Décommente pour afficher le résultat de la fonction à l'écran
displayText(`${sayHello('Mike')}`)

// 🐶 Créer une fonction `sum` qui retourne la somme de 2 nombres passés en argument
// Affiche le resultat à l'écran avec `displayText`
function sum(a: number, b: number): number {
  return a + b
}
let a = 2
let b = 3
displayText(`La somme de ${a} et ${b} vaut ${sum(a, b)}`)

// 🐶 Créer une fonction `printGender` qui retourne 'Monsieur' ou 'Madame' en fonction d'un argument `isMale`
function printGender(isMale: boolean): string {
  return `Bonjour ${isMale ? 'Monsieur' : 'Madame'}`
}
displayText(`${printGender(true)}`)
displayText(`${printGender(false)}`)
