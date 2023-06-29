import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flashcards } from './flashcards.model';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  flashs: Flashcards[] = [{
    question: 'Question 1',
    answer: 'Answer 1',
    show: false,
    id: getRandomNumber(),
  }, {
    question: 'Question 2',
    answer: 'Answer 2',
    show: false,
    id: getRandomNumber(),
  }, {
    question: 'Question 3',
    answer: 'Answer 3',
    show: false,
    id: getRandomNumber(),
  }];
  flashs$ = new BehaviorSubject<Flashcards[]>(this.flashs);
  flash: { question: any, answer: any, show: boolean, id: any, remembered?: 'correct' | 'incorrect' };

  constructor() {
    this.flash = {
      question: '',
      answer: '',
      show: true,
      id: null,
      remembered: undefined
    };
  }

  addFlash(flash: Flashcards) {
    this.flashs = [
      ...this.flashs,
      {
        ...flash,
        show: false,
        id: getRandomNumber()
      }
    ];
    this.flashs$.next(this.flashs);
  }

  toggleFlash(id: number) {
    const index = this.flashs.findIndex(flash => flash.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        show: !this.flashs[index].show
      },
      ...this.flashs.slice(index + 1),
    ];
    this.flashs$.next(this.flashs);
  }

  deleteFlash(id: number) {
    const index = this.flashs.findIndex(flash => flash.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      ...this.flashs.slice(index + 1)
    ];
    this.flashs$.next(this.flashs)
  }

  rememberedChange(id: number, flag: 'correct' | 'incorrect') {
    const index = this.flashs.findIndex(flash => flash.id === id);

    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        remembered: flag
      },
      ...this.flashs.slice(index + 1)
    ];
    this.flashs$.next(this.flashs);
  }

  updateFlash(id: number, updatedFlash: Flashcards) {
    const index = this.flashs.findIndex(flash => flash.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        ...updatedFlash
      },
      ...this.flashs.slice(index + 1)
    ];
    this.flashs$.next(this.flashs);
  }

  getFlash(id: number) {
    const flash = this.flashs.find(flash => flash.id === id);
    return flash;
  }
}
function getRandomNumber(): number {
  throw new Error('Function not implemented.');
}

