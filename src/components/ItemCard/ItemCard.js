import React from 'react';
// import config from '../config';
// import EditItem from './EditItem';
import AppContext from '../../AppContext';
import { withRouter, Link } from 'react-router-dom';
class ItemCard extends React.Component {
  static contextType = AppContext;
  state = {
    show: false,
  };

  render() {
    const {
      id,
      sku,
      name,
      description,
      price,
      cost,
      inventory,
    } = this.props.item;

    // const showEditItem = (e) => {
    //   this.setState({
    //     show: true,
    //   });
    // };
    // const hideEditItem = (e) => {
    //   this.setState({ show: false });
    //   this.props.history.push('/dashboard');
    // };
    return (
      <div className='card'>
        <div className='title'>
          <span className='infotitle'>Title: </span>
          {name}
        </div>

        <div className='sku'>
          <span className='infotitle'>SKU: </span>
          {sku}
        </div>

        <div className='description'>
          <span className='infotitle'>Description: </span>
          {description}
        </div>
        <div className='price'>
          <span className='infotitle'>Price: </span>
          {price}
        </div>
        <div className='cost'>
          <span className='infotitle'>Cost: </span>
          {cost}
        </div>
        <div className='inventory'>
          <span className='infotitle'>Inventory: </span>
          {inventory}
        </div>

        {/* <EditItem
          item={this.props.item}
          show={this.state.show}
          handleClose={hideEditItem}
        /> */}
        <div className='card-buttons'>
          <Link to={`/edit-item/${id}`}>
            <button type='button'>Edit Item</button>
          </Link>
          {/* // onClick={showEditItem}> // Edit */}
          <button type='submit' onClick={() => this.context.deleteItem(id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(ItemCard);