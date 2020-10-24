import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Card from './Card'
 
// list of items
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
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
    this.menuItems = Menu(list, selected);
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
    const menu = [<Card key='1' />,<Card key='2' />,<Card key='3' />,<Card key='4' />,<Card key='5' />,<Card key='6' />,<Card key='7' />,<Card key='8' />,<Card key='9' />,<Card key='10' />,<Card key='11' />,<Card key='12' />,<Card key='13' />,<Card key='14' />];
 
    return (
      <div className="card-slider">
      <h3 className='slider-header'>jackets</h3>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          transition={1}
          inertiaScrolling={true}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
 

export default CardScroller