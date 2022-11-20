import { NgModule } from '@angular/core'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'

@NgModule(({
    imports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatIconModule,
        MatSidenavModule,
        MatGridListModule,
        MatCardModule,
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatIconModule,
        MatSidenavModule,
        MatGridListModule,
        MatCardModule,
    ]
}))



export class MaterialModule{}