// author
// review
import Container from 'components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE, API_KEY } from 'services/api';

export default function Reviews({ reviewsArray }) {
  console.log('reviewsArray', reviewsArray);

  return (
    <Container>
      <p>Reviews</p>
    </Container>
  );
}
