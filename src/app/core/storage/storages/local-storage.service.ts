import { Injectable } from '@angular/core';

import { AbstractStorage } from '../interfaces/storage.interface';
import { storageAvailable } from '../util/storage.util';
import { MemoryService } from './memory.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends AbstractStorage {
  constructor() {
    super(storageAvailable('localStorage') ? window.localStorage : new MemoryService());
  }
}
