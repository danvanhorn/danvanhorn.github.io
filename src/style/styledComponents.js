import Styled from '../utils/styled';
import s from './app.style.js';

export const ContentContainer = Styled('div',{
  width: '100vw',
  height: '87vh',
  paddingTop: '13vh',
  overflowY: 'scroll'
});

export const ContentWrapper = Styled('div', {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    margin: 'auto',
    width: '60vw'
})

export const ContentTitle = Styled('h1', s.contentTitle)