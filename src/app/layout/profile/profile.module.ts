import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileeRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [CommonModule, ProfileeRoutingModule],
    declarations: [ProfileComponent]
})
export class ProfileModule {}
