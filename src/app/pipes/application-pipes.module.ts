import { NgModule } from '@angular/core';

import { FormatAgePipe } from './format-age.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { LocalTimePipe } from './local-time.pipe';

@NgModule({
  declarations: [
    FormatDatePipe,
    FormatAgePipe,
    LocalTimePipe,
  ],
  exports: [
    FormatDatePipe,
    FormatAgePipe,
    LocalTimePipe,
  ],

})
export class ApplicationPipesModule { }