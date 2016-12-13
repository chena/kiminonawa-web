import React from 'react';

import Col from 'muicss/lib/react/col';
import styles from '../styles.css';
import Lightbox from 'react-image-lightbox';

export default class Case extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const {isOpen} = this.state;

    return (
      <Col md="8" md-offset="2">
        <h2>{this.props.situation}</h2>
        <div className={styles.bodyText}>
          <a className={styles.linkDecorated} href={this.props.url} target="_blank" >{this.props.url}</a>
        </div>
        {this.props.imgUrl && <button onClick={() => this.setState({isOpen: true})}>See Screenshot</button>}
        {isOpen && <Lightbox
          mainSrc={this.props.imgUrl}
          onCloseRequest={() => this.setState({ isOpen: false })}
        />}
      </Col>
    );
  }
}