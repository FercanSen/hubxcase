import styles from './App.module.css';
import SliderMenu from './components/SliderMenu/SliderMenu';

export function App() {
  return (
    <>
      <header>
        <h1>HubX Frontend Assignment</h1>
      </header>

      <SliderMenu />

      <main className={styles.main}></main>
    </>
  );
}
