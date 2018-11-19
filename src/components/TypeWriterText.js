import React from "react";

export default class TypeWriterText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.addText = true;
    this.txtIndex = 0;
    this.wordIndex = 0;

    this.manipulateWords = this.manipulateWords.bind(this);
  }

  manipulateWords() {
    if (this.wordIndex === this.props.words.length) {
      // repeat words from starting
      this.wordIndex = 0;
      this.txtIndex = 0;
      setTimeout(this.manipulateWords, 300);
    } else if (this.addText === true) {
      // add text
      if (this.txtIndex < this.props.words[this.wordIndex].length) {
        // if only the text index is less than the word
        this.setState(
          (prevState, props) => {
            return {
              text:
                prevState.text +
                this.props.words[this.wordIndex].charAt(this.txtIndex)
            };
          },
          () => {
            this.txtIndex += 1;
            setTimeout(this.manipulateWords, this.props.addTextTiming);
          }
        );
      } else {
        // time to remove text one by one
        this.addText = false;
        this.txtIndex -= 1;
        setTimeout(this.manipulateWords, this.props.removeTextTiming);
      }
    } else {
      // delete text
      if (this.txtIndex >= 0) {
        this.setState(
          (prevState, props) => {
            return {
              text: this.props.words[this.wordIndex].slice(0, this.txtIndex)
            };
          },
          () => {
            this.txtIndex -= 1;
            setTimeout(this.manipulateWords, this.props.removeTextTiming);
          }
        );
      } else if (this.txtIndex === -1) {
        // if the text is removed completely and it's time to add text of the next word
        this.txtIndex = 0;
        this.addText = true;
        this.wordIndex += 1;
        setTimeout(this.manipulateWords, this.props.addTextTiming);
      }
    }
  }

  componentDidMount() {
    setTimeout(this.manipulateWords, 3500);
  }

  render() {
    return <span style={this.props.textStyle}>{this.state.text}</span>;
  }
}
