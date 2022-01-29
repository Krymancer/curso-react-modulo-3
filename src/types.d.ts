interface Book {
  title: string;
  author: string;
  url: string;
}

interface BookAction {
  type: string;
  payload: Book[];
}

interface InitialState  {
  books?: Book[];
  query?: string;
  loading?: boolean;
}
