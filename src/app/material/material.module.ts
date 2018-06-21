import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	MatButtonModule, 
	MatToolbarModule,
	MatGridListModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
  MatSnackBarModule,
  MatIconModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatTooltipModule,
	MatBadgeModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSlideToggleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  declarations: [],
  exports: [
  	MatButtonModule,
  	MatToolbarModule,
  	MatGridListModule,
  	MatCardModule,
  	MatFormFieldModule,
  	MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
