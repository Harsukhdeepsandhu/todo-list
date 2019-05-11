import React, { Component } from 'react';
import './addItem.css';

class AddItem extends Component {
    render() {
        let props = this.props;
        function handleClick() {
            let itemText = document.getElementById('item').value;
            props.itemAdded(itemText);
        }
        return (
            <div className="add-bar">
                <input type="text" placeholder="Enter your list item" id="item" />
                <input type="submit" value="ADD" onClick={handleClick} />
            </div>
        );
    }
}

export default AddItem;