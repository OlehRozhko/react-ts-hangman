import styles from './Keyboard.module.css';
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  activeLetters: string[],
  addGuessesLetter: (letter: string) => void,
  inactiveLetter: string[],
  disabled?: boolean
}

function Keyboard({ activeLetters, addGuessesLetter, inactiveLetter, disabled = false }: KeyboardProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      gap: ".5rem"
    }}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetter.includes(key);
        return (
          <button
            onClick={() => addGuessesLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}
            disabled={isActive || isInactive || disabled}
            key={key}>
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard