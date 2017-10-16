import Styled from '../../utils/styled';
import s from './app.style.js';

export const ContentContainer = Styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: '100%',
  backgroundColor: '#e6e6e6'
});

export const ContentTitle = Styled('h1', s.contentTitle)