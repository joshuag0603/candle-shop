import React from 'react';
import styled from 'styled-components';

interface PictureAndQuoteProps {
  imageSrc: string;
  altText?: string;
  quote: string;
  author?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  max-width: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Quote = styled.blockquote`
  font-style: italic;
  text-align: center;
  margin-top: 1rem;
  padding: 0 1rem;
`;

const Author = styled.cite`
  display: block;
  margin-top: 0.5rem;
  font-weight: bold;
  font-style: normal;
`;

const PictureAndQuote: React.FC<PictureAndQuoteProps> = ({
  imageSrc,
  altText,
  quote,
  author,
}) => {
  return (
    <Container>
      <Image src={imageSrc} alt={altText} />
      <Quote>
        “{quote}”
        {author && <Author>-{author}</Author>}
      </Quote>
    </Container>
  );
};

export default PictureAndQuote;