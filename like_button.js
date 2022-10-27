'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false }
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

class DislikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disliked: false };
  }

  render() {
    if (this.state.disliked) {
      return 'You disliked this.';
    }

    return (
      <button onClick = {() => this.setState({ disliked: true }) }>
        Dislike
      </button>
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

    console.log(this)
    return (
      <React.Fragment>
        <input placeholder = "comment"></input>
        <button onClick = {() => this.setState({ commented: true }) }>
          comment
        </button>
      </React.Fragment>
    );
  }
}

const e = React.createElement;

const domContainerLikeButton = document.querySelector('#like_button_container');
const rootLikeButton = ReactDOM.createRoot(domContainerLikeButton);
rootLikeButton.render(e(LikeButton));

const domContainerDislikeButton = document.querySelector('#dislike_button_container');
const rootDislikeButton = ReactDOM.createRoot(domContainerDislikeButton);
rootDislikeButton.render(e(DislikeButton));

const domContainerCommentInput = document.querySelector('#comment_input_container');
const rootCommentInput = ReactDOM.createRoot(domContainerCommentInput);
rootCommentInput.render(e(CommentInput));
