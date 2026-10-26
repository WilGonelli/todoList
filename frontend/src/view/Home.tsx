import { useState } from "react";
import ArrowIcon from "../components/svgs/ArrowIcon";
import styles from "./home.module.css";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("select");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ToDo List</h1>
      <div className={styles.content}>
        <section className={styles.left}>
          <form action="" className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="task-name">Task name</label>
              <input type="text" id="task-name" name="task-name" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="task-description">Task description</label>
              <input
                type="text"
                id="task-description"
                name="task-description"
              />
            </div>
            <div className={styles.dropbox} onClick={() => setOpen(!open)}>
              <p>
                {status}
                <span
                  style={
                    open
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                >
                  <ArrowIcon />
                </span>
              </p>
              <ul className={open ? styles.opened : ""}>
                <li
                  onClick={() => {
                    setStatus("pending");
                    setOpen(!open);
                  }}
                >
                  <p>pending</p>
                </li>
                <li
                  onClick={() => {
                    setStatus("in_progress");
                    setOpen(!open);
                  }}
                >
                  <p>in_progress</p>
                </li>
                <li
                  onClick={() => {
                    setStatus("completed");
                    setOpen(!open);
                  }}
                >
                  <p>Compleedt</p>
                </li>
              </ul>
            </div>
          </form>
        </section>
        <section className={styles.right}></section>
      </div>
    </div>
  );
}
