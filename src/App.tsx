import styles from "./App.module.css";

import { Steps } from "./components/Steps";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Steps />
    </div>
  );
}
