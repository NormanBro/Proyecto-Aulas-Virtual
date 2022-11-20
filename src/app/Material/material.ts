import { NgModule } from '@angular/core'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'

@NgModule(({
    imports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatIconModule,
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatIconModule,
        
    ]
}))



export class MaterialModule{}