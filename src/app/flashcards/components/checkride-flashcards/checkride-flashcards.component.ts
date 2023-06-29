import { Component, Inject, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { Flashcards } from '../../flashcards.model';
import  checkrideJson  from './assets/checkride-data.json';

interface Flashcard {
  question: String;
  answer: String;    
}

@Component({
  selector: 'app-checkride-flashcards',
  templateUrl: './checkride-flashcards.component.html',
  styleUrls: ['./checkride-flashcards.component.css']
})

export class CheckrideFlashcardsComponent implements OnInit {

  flashcards:Flashcard[] = checkrideJson;

  //flashcard = CHECKRIDEDATA;

  //to the interface
  //flashcard: Flashcards = {

  questions: String[] = [
    'What documents must you have with you to fly the airplane? (61.3)',
    'What are the eligibility requirements for a private pilot (airplane) certificate? (14 CFR 61.103)',
    'What privileges and limitations apply to a private pilot? (14 CFR 61.113)'
  ];

  answers: String[] = [
    'Pilot certificate, medical certificate, and government issued photo ID. *as a student pilot, these documents in addition to your logbook (to show endorsements) are only required when acting as PIC (solo flight)',
    'a) be at least 17 years of age. b) Be able to read, speak, write, and understand the English language. c) Hold at least a current third-class medical certificate. d) Received the required ground and flight training endorsements. e) Meet the applicable aeronautical experience requirements. f) Passed the required knowledge and practical tests. Exam Tip) The evaluator may ask you to demonstrate that your\'re current and eligible to take the practical test. When preparing for your practical test, verify that you have the required hours, that you\'re current, and don\'t forget to double check all of your endorsements (especially the 90-day solo flight endorsement). Make sure you have totaled all of the logbook columns and that the entries make sense.',
    'No person who holds a private pilot certificate may act as pilot in command of an aircraft that is carrying passengers or property for compensation or hire; nor may that person, for compensation or hire, act as pilot in command of an aircraft. A private pilot -- a) May act as PIC of an aircraft in connection with any business or employment if it is only incidental to that business or employment and does not carry passengers or property for compensation or hire. b) May not pay less than the pro rata share of the operating expenses of a flight with passengers, provided the expenses involve only fuel, oil, airport expenditures, or rental fees. c) May act as PIC of a charitable, nonprofit, or community event flight described in 14 CFR 91.146, if the sponsor and pilot comply with the requirements of that regulation.'

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
