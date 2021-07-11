import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [CommonModule, RouterModule, HeaderModule, FooterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
