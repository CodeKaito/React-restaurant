import React from 'react';
import {images} from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBotto: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt='spoon' className='spoon§__img' />
  </div>
);

export default SubHeading;
