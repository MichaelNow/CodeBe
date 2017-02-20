import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { Ng2HighchartsModule } from 'ng2-highcharts';

import { HomeComponent } from './home.component';
import { CkeditorDemoComponent } from '../ckeditor-demo/ckeditor-demo.component';
import { HighchartsDemoComponent } from '../highcharts-demo/highcharts-demo.component';
import { MarkdownDemoComponent } from '../markdown-demo/markdown-demo.component';
import { MdEditorComponent } from '../markdown-demo/md-editor.component';

import { homeRoutes } from './home.routes'; 
@NgModule({
  
  declarations: [
      HomeComponent,
      CkeditorDemoComponent,
      HighchartsDemoComponent,
      MarkdownDemoComponent,
      MdEditorComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CKEditorModule,
    Ng2HighchartsModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }