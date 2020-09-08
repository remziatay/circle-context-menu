# Circle Context Menu

Circle context menu is a library to have a custom interactive circle right click menu on elements.

### Usage

Circle menu can be attached to an element on constructor or can manually be shown and chosen.

```js
myElement.style.userSelect = "none";
const menu = new CircleContextMenu({
  radius: 300,
  background: "#e04e15",
  color: "#fcf7ff",
  chosenBackground: "#0a1f33",
  chosenColor: "#e6c670",
  font: "40px bold serif",
  element: myElement,
  chooseOnRelease: true,
  touchDuration: 500,
  tolerance: 5,
});
```

or

```js
const menu = new CircleContextMenu({ radius: 300 });
myElement.addEventListener("mousedown", evt => {
  if (evt.buttons === 2) menu.show(evt.clientX, evt.clientY);
});
menu.canvas.addEventListener("mouseup", () => this.choose());
```

If long touch gesture is wanted to fire up the menu, user-select attribute must be cancelled.

```js
myElement.style.userSelect = "none";
```

If element is attached on constructor but touch gesture is not wanted, touchDuration must be sent falsy.

[Check demo page to see how it looks!](https://remziatay.github.io/circle-context-menu/ "Demo page")

---

**New:** Elements now can be attached or detached manually as well.

```js
menu.attach(myElement);
menu.detach(myElement);
```

**Warning:** A menu must not be attached to more than one element.

---

#### Constructor parameters

| Name               | Description                                   | Default             |
| ------------------ | --------------------------------------------- | ------------------- |
| radius (px)        | Circle radius                                 | `200`               |
| background         | Each slice's background color                 | `'red'`             |
| color              | Each slice's text color                       | `'white'`           |
| chosenBackground   | Chosen slice's background color               | `'blue'`            |
| chosenColor        | Chosen slice's text color                     | `color`             |
| chooseOnRelease    | Menu choosing method                          | `true`              |
| font               | Each slice's font family/weight/size          | `'35px sans-serif'` |
| element            | Element to attach the menu                    | `null`              |
| touchDuration (ms) | Duration to show menu on long touch           | `500`               |
| tolerance (px)     | Distance tolerance to keep menu on touch move | `5`                 |

## License

MIT
