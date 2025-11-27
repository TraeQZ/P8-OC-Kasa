
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel component', () => {
  const pictures = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  test('affiche la première image par défaut', () => {
    render(<Carousel pictures={pictures} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'image1.jpg');
  });

  test('change d’image quand on clique sur la flèche droite', () => {
    render(<Carousel pictures={pictures} />);
    const nextButton = screen.getByRole('button', { name: /❯/ });
    fireEvent.click(nextButton);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'image2.jpg');
  });

  test('revient à la première image après la dernière', () => {
    render(<Carousel pictures={pictures} />);
    const nextButton = screen.getByRole('button', { name: /❯/ });
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton); // boucle
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'image1.jpg');
  });

  test('change d’image quand on clique sur la flèche gauche', () => {
    render(<Carousel pictures={pictures} />);
    const prevButton = screen.getByRole('button', { name: /❮/ });
    fireEvent.click(prevButton);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'image3.jpg'); // boucle arrière
  });
});
