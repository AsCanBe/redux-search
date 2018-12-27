import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../index';

const Card = styled.div`
  background-color: #fff;
  position: relative;
  border-bottom: solid 1px rgba(0,0,0,.2);
  @media (min-width: 768px) {
    border: none;
    border-radius: .3rem;
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
  }
`

const Thumbnail = styled.img`
  width: 100%;
`

const WebLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const CardLink = styled.p`
  text-decoration: underline;
  font-size: .7rem;
`

const createMarkup = (markup) => ({ __html: markup });

export default (props) => {
  const { title, thumbnail, trailText, webUrl } = props;

  return (
    <Card>
      <WebLink
        target="_blank"
        href={webUrl}
      ></WebLink>
      <div className="text-box">
        <h3 dangerouslySetInnerHTML={createMarkup(title)}></h3>
      </div>
      <Thumbnail src={props.thumbnail} />
      <div className="text-box">
        <p dangerouslySetInnerHTML={createMarkup(trailText)}></p>
        <CardLink>Read more</CardLink>
      </div>
    </Card>
  );
}
