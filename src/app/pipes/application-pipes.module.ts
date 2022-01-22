import { NgModule } from '@angular/core';

import { FormatAgePipe } from './format-age.pipe';
import { FormatDatePipe } from './format-date.pipe';

@NgModule({
  declarations: [
    FormatDatePipe,
    FormatAgePipe,
  ],
  exports: [
    FormatDatePipe,
    FormatAgePipe,
  ],

})
export class ApplicationPipesModule { }