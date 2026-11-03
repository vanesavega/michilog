export type ColorGato = 'mantequilla' | 'lavanda' | 'menta' | 'durazno' | 'cielo';

export const COLORES_GATO: readonly ColorGato[] = ['mantequilla', 'lavanda', 'menta', 'durazno', 'cielo'];

export const PELAJE: Record<ColorGato, string> = {
  mantequilla: '#ffefb3',
  lavanda: '#dcd5f5',
  menta: '#cdebdc',
  durazno: '#ffdcc8',
  cielo: '#cde5f4',
};