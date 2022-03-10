import { useState } from 'react';
// import { Component } from 'react/cjs/react.production.min';

export default function Reviews({ message }) {
  const [visible, setVisible] = useState(false);

  const showMessage = () => {
    setVisible(true);
  };
  console.log(visible);

  return <div>{<h1 className="message">{message}</h1>}</div>;
}
// class Notification extends Component {
//     state = {
//     visible:false,
// }

//     show = () => {
//         this.setState({visible:true})
//     }

//   render() {
//     return <div>{<h1 className="message">{this.props.message}</h1>}</div>;
//   }
// }
// export default Notification;
