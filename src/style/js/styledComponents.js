import Styled from '../../utils/styled';
import s from './app.style.js';

export const ContentContainer = Styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: '100%',
  backgroundColor: '#e6e6e6'
});

export const ContentWrapper = Styled('div', {
  display: 'flex',
  flexFlow: 'column',
  height: '100%',
  width: '80vw',
  paddingTop: '20vh',
  boxShadow: '1px 1px 5px grey',
  backgroundColor: '#fff'
})

export const ContentSection = Styled('div', {
  width: '80%',
  alignSelf: 'center',
  paddingLeft: '4vh',
  paddingRight: '4vh',
  paddingBottom: '4vh'
})

export const ContentTitle = Styled('h1', s.contentTitle)