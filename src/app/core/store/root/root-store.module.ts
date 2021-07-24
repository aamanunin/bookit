import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { RootRouterStateSerializerService } from './services/root-router-state-serializer.service';
import { rootInitialState, rootReducers } from './state/root.reducer';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    StoreModule.forRoot(rootReducers, {
      initialState: rootInitialState,
      metaReducers: [],
    }),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot({ serializer: RootRouterStateSerializerService }),
  ],
})
export class RootStoreModule {}
