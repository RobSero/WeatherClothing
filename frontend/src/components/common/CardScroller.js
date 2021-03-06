import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Card from './Card'
 

 

 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(clothesItem => {
    return <Card key={clothesItem._id} selected={selected} {...clothesItem} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';
 
class CardScroller extends React.Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(props.clothes, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div className="card-slider">
      <h3 className='slider-header'>{this.props.category}</h3>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
 
 

export default CardScroller