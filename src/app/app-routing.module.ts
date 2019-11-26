import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';


const routes: Routes = [{
  path: 'books', component: BookListComponent
},
{
  path: 'add', component: CreateBookComponent
},
{
  path: '', component: BookListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
