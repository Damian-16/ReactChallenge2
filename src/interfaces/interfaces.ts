export interface Result {
  id: number;
  title: string;
  description: string;
  img: string;
}

export interface ResultsComponentProps {
  searchResults: Result[];
}

export interface SearchAction {
  type: string;
  payload?: any;
}

export interface SearchState {
  loading: boolean;
  data: Result[]; // El tipo específico de los datos dependerá de tu aplicación
}
