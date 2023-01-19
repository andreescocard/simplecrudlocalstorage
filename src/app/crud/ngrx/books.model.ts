import { EntityState } from '@ngrx/entity';

export interface Book {
  [id: string] : any;
  title?: any;
  author?: any;
  description?: any;
}
// For extending the BookState Interface, we could always use
// export interface BookState extends EntityState<Book> {}
export type BookState = EntityState<Book> | any;
