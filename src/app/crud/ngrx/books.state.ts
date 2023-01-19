import { BookState } from "./books.model";
import { AppState } from '../../core/core.module';
import { createFeatureSelector } from "@ngrx/store";

export const FEATURE_NAME = 'examples';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
    FEATURE_NAME
);

export interface ExamplesState {
    books: BookState;
  }
  

export interface State extends AppState {
    examples: ExamplesState;
}