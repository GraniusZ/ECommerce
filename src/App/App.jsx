import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router";
import styles from "./App.module.scss";
const App = () => {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
