import Styled from '../utils/styled';
import s from './app.style.js';

export const ContentContainer = Styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#e6e6e6',
});

export const ContentWrapper = Styled('div', {
  display: 'flex',
  flexFlow: 'column',
  height: '100vw',
  width: '60vw',
  overflowY: 'scroll',
  paddingTop: '13vh',
  paddingLeft: '10vw',
  paddingRight: '10vw',
  border: '1px solid black',
  backgroundColor: '#fff'
})

export const ContentSection = Styled('div', {
  width: '80%',
  alignSelf: 'center'
})

export const ContentTitle = Styled('h1', s.contentTitle)