import logo from "./logo.svg";
// import "./App.css";
// import "./App.scss";
import styles from "./App.module.css";
import Button from "./components/Button";

// style 안에 아래의 키값형태로 된 object가 들어가 있고,
// 이 key값을 <div className={styles["App"]}> 와 같이 사용할 수 있다.

// { 이름구성 : fileName_className__HashValue
//   App: "App_App__B2Ebb"
// App-header: "App_App-header__PyRwd"
// App-link: "App_App-link__XPeK4"
// App-logo: "App_App-logo__yMrik"
// App-logo-spin: "App_App-logo-spin__1up6W"
// }

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
