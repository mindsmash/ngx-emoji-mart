import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmojiModule } from '@coyo/ngx-emoji-mart/ngx-emoji';
import { AnchorsComponent } from './anchors.component';
import { CategoryComponent } from './category.component';
import { PickerComponent } from './picker.component';
import { PreviewComponent } from './preview.component';
import { SearchComponent } from './search.component';
import { SkinComponent } from './skins.component';

const components: any[] = [
  PickerComponent,
  AnchorsComponent,
  CategoryComponent,
  SearchComponent,
  PreviewComponent,
  SkinComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, ScrollingModule, EmojiModule],
  exports: components,
  declarations: components,
})
export class PickerModule {}
