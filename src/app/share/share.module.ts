import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { HeaderComponent, FooterComponent } from './components';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';



const baseModules = [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule];
const angularMaterialModule = [
  MatTooltipModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule
];

// const components = [HeaderComponent, FooterComponent];

const directives = [
  // ClickOutSideDirective
];

const pipes = [
  // StatusPipe,
];

const dynamicComponents = [
  // AccountModalComponent
];

const shareProviders = [
  // LoaderService,
  // MenuService
];

@NgModule({
  imports: [...baseModules, ...angularMaterialModule],
  exports: [
    ...baseModules,
    // ...components,
    ...directives,
    ...pipes,
    ...dynamicComponents,
    ...angularMaterialModule
  ],
  entryComponents: [...dynamicComponents],
  declarations: [
    // ...components, 
    ...directives, ...pipes, ...dynamicComponents]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule,
      providers: [...shareProviders]
    };
  }
}
