## React Component Styling

#### Css module, SASS module

1. App.module.css
   module.css 는 절대로 키값을 오염되지 않게 사용이 가능하도록, 자동으로 키값을 생성해준다.
   ex) 이름구성 : fileName_className\_\_HashValue

```js
{
  App: "App_App__B2Ebb"
  App-header: "App_App-header__PyRwd"
  App-link: "App_App-link__XPeK4"
  App-logo: "App_App-logo__yMrik"
  App-logo-spin: "App_App-logo-spin__1up6W"
}
```

2. classnames module
   classname을 편하게 쓸 수 있도록 제공됨

```jsx
import classNames from "classnames/bind"
  render() {
    // console.log(classNames("foo", "bar"));
    // console.log(classNames("foo", "bar", "baz"));

    // console.log(classNames({ foo: true }, { bar: false }));
    // console.log(
    //   classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")
    // );

    // console.log(classNames(styles["button"], styles["loading"]));

    const { loading } = this.state;
    return (
      <button
        onClick={this.startLoading}
        className={cx("button", { loading })}
        {...this.props}
      />
    );
  }

// console
  // Button_button__iEiBG
  // Button_loading__P1+Lv
```
