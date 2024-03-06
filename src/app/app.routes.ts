import { ContactComponent } from './components/contact/contact.component';
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

export const routes: Routes =
 [
    {path:'blog-post',title:"Blog", component:BlogPostComponent},
    {path:'contact',title:"Contact form", component:ContactComponent}

];
