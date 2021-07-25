import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RoomDto, RoomEntity } from '@app/room/common';

import { LocalStorageService } from '../../core/storage/storages/local-storage.service';
import { ROOMS_DTO_STUB } from './room.stub';

const ROOMS_STORAGE_KEY = 'rooms';

export function castRoomEntity(room: RoomDto): RoomEntity {
  return {
    ...room,
    roomRemoveRun: false,
    roomRemoveError: null,
    roomChangeRun: false,
    roomChangeError: null,
  };
}

export function castRoomDto<T extends RoomEntity = RoomEntity>({
  id,
  created,
  updated,
  amenities,
  bathrooms,
  beds,
  bedrooms,
  building,
  description,
  guests,
  photos,
  price,
}: T): RoomDto {
  return {
    id,
    created,
    updated,
    amenities,
    bathrooms,
    beds,
    bedrooms,
    building,
    description,
    guests,
    photos,
    price,
  };
}

@Injectable()
export class RoomStorageService {
  constructor(private readonly localStorage: LocalStorageService) {}

  clear(): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, []);
  }

  get(): Observable<RoomEntity[]> {
    return this.localStorage
      .getItem<RoomDto[] | null>(ROOMS_STORAGE_KEY)
      .pipe(map((rooms) => (rooms ?? ROOMS_DTO_STUB).map(castRoomEntity)));
  }

  post(rooms: RoomEntity[] | null): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, rooms?.map(castRoomDto));
  }

  reset(): void {
    this.localStorage.setItem(ROOMS_STORAGE_KEY, ROOMS_DTO_STUB);
  }
}
