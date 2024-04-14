import React, { Component } from 'react';
import { CardProps } from './Card.types'; // Imports the defined type
import { ImageGalleryProps, ImageGallery } from "../Image";

interface CardState {
  // Add any state properties you need here (optional)
}

class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      // Initialize state properties here (optional)
    };
  }

  render() {
    const { title, description, imageUrl } = this.props;
    return (
      <div className="card">
        {imageUrl && <img src={imageUrl} alt={title} />}
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    );
  }
}

export default Card;
