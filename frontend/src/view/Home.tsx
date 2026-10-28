import ArrowIcon from "../components/svgs/ArrowIcon";
import styles from "./home.module.css";
import useHomeViewModel from "../viewmodel/useHomeViewModel";

export default function Home() {
  const {
    name,
    setName,
    description,
    setDescription,
    status,
    setStatus,
    dueDate,
    setDueDate,
    open,
    setOpen,
    tasks,
    addTask,
  } = useHomeViewModel();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ToDo List</h1>
      <div className={styles.content}>
        <section className={styles.left}>
          <form action="" className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="task-name">Task name</label>
              <input
                type="text"
                id="task-name"
                name="task-name"
                value={name ?? ""}
                placeholder="task name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="task-description">Task description</label>
              <input
                type="text"
                id="task-description"
                name="task-description"
                value={description ?? ""}
                placeholder="task description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <p className={styles.label}>Status</p>
              <div
                className={styles.dropbox}
                id="status"
                onClick={() => setOpen(!open)}
              >
                <p>
                  {status}
                  <span
                    style={
                      open
                        ? { transform: "rotate(0deg)" }
                        : { transform: "rotate(180deg)" }
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
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="dueDate">Due date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                value={dueDate ?? ""}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <button
              className={styles.submitBtn}
              onClick={(e) => {
                e.preventDefault();
                addTask();
              }}
              disabled={
                !name || !description || !dueDate || status === "select"
              }
            >
              Submit
            </button>
          </form>
        </section>
        <section className={styles.right}>
          <p className={styles.sectionTitle}>task list</p>
          <ul className={styles.taskContainer}>
            {tasks.length > 0 ? (
              tasks.map((task, index) => {
                return (
                  <li key={index}>
                    <div className={styles.taskInfoContainer}>
                      <div className={styles.taskInfo} style={{ flex: 2 }}>
                        <p>task name: {task.name}</p>
                        <p>task description: {task.description}</p>
                      </div>
                      <div
                        className={styles.taskInfo}
                        style={{ alignItems: "flex-end", flex: 1 }}
                      >
                        <p>{task.status}</p>
                        <p>due date: {task.dueDate}</p>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <div className={styles.emptyContainer}>
                <p>There is no task yet</p>
              </div>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
