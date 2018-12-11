import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent  } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
    ],
})
export class PagesModule { }
