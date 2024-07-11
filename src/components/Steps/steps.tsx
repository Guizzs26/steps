import styles from "./steps.module.css";
import { useState } from "react";

import { messages } from "../../data/messagesData";

export function Steps() {
  const [step, setStep] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function handlePrevious(): void {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext(): void {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className={styles.close}
      >
        &times;
      </button>

      {isOpen && (
        <>
          <h1 className={styles.title}>Steps</h1>

          <div className={styles.steps}>
            <div className={styles.numbers}>
              <div className={`${step >= 1 ? styles.active : ""}`}>1</div>
              <div className={`${step >= 2 ? styles.active : ""}`}>2</div>
              <div className={`${step >= 3 ? styles.active : ""}`}>3</div>
            </div>

            <p className={styles.message}>
              Step {step}: {messages[step - 1]}
            </p>

            <div className={styles.buttons}>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
