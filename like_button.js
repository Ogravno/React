'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}

const e = React.createElement;

const domContainer2 = document.querySelector('#comment_input_container');
const root2 = ReactDOM.createRoot(domContainer2);
root2.render(e(LikeButton));