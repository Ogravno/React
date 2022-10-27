'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

class DislikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disliked: false };
  }

  render() {
    if (this.state.disliked) {
      return 'You disliked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ disliked: true }) },
      'Dislike'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

const domContainer1 = document.querySelector('#dislike_button_container');
const root1 = ReactDOM.createRoot(domContainer1);
root1.render(e(DislikeButton));