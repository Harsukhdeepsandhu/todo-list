import React, { Component } from 'react';
import './items.css';

class Items extends Component {

    handleDelete(arg, array) {
        let index = arg;
        let list = array;
        list.splice(index, 1);
        localStorage.setItem('reactTodoList', JSON.stringify(list));
        this.forceUpdate();
    }

    handleCheck(arg, array) {
        let index = arg;
        let list = array;
        list[index].checked = !list[index].checked;
        localStorage.setItem('reactTodoList', JSON.stringify(list));
    }

    render() {
        let props = this.props.items;
        let list = [];
        for (let i = 0; i < props.length; i++) {
            list.push(
                <div key={i} className="items-div">
                    <div>
                        <input type="checkbox" id={i} defaultChecked={props[i].checked} onChange={this.handleCheck.bind(this, i, props)} />
                        <label htmlFor={i}>{props[i].item}</label>
                    </div>
                    <div>
                        <span onClick={this.handleDelete.bind(this, i, props)}>&#10006;</span>
                    </div>
                </div>
            );
        }
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Items;