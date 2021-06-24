import React, { Component } from "react";
import { observer } from "mobx-react";
import { action, makeObservable, observable } from "mobx";

export const Counter = observer(
  class extends Component {
    count = 0;

    constructor(props) {
      super(props);
      makeObservable(this, {
        count: observable,
        dec: action,
        inc: action.bound,
      });
      this.count = this.props.initialCount ?? 0;
    }

    // dec и inc - действия
    // они меняют наблюдаемые значения (count)
    // как только изменились наблюдаемые значения, запустится реакция (observer)
    // которая и перерисует наш компонент

    // стрелочная функция, байндить не нужно, контекст сохранен
    dec = () => this.count--;

    // обычная функция, не байндили
    inc() {
      this.count++;
    }

    render() {
      return (
        <div>
          <button onClick={this.dec}>-</button>
          <span>
            Используем свойство класса, а не объекта state: {this.count}
          </span>
          <button onClick={this.inc}>+</button>
        </div>
      );
    }
  }
);
