
import { Injectable } from '@angular/core'
import {BehaviorSubject} from 'rxjs'
import {shareReplay, map} from 'rxjs/operators'
//import { LayoutService } from '../services/layout.service'

@Injectable({
  providedIn: 'root'
})
export class LayoutStoreService {

  constructor() { }

  private readonly _crudModo = new BehaviorSubject<String>('');

  // atributo visto pelos componentes
  readonly crudModo$ = this._crudModo.asObservable();

  private get crudModo() : String {
    return this._crudModo.getValue();
  }

  private set crudModo(val: String) {
    this._crudModo.next(val);
  }

  public crudModoLista() {
    this.crudModo = 'lista';
  }

  public crudModoEdit() {
    this.crudModo = 'edit';
  }

}
