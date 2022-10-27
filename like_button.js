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

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { commented: false };
  }

  render() {
    if (this.state.commented) {
      return 'You commented on this.';
    }

    return e(
      'input',
      { placeholder: "comment" }
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

const domContainer1 = document.querySelector('#dislike_button_container');
const root1 = ReactDOM.createRoot(domContainer1);
root1.render(e(DislikeButton));

const domContainer2 = document.querySelector('#comment_input_container');
const root2 = ReactDOM.createRoot(domContainer2);
root2.render(e(CommentInput));