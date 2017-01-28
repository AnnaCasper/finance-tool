import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { StartRoutes } from './start/index';
import { LoginRoutes } from './login/index';
import { ResourceRoutes } from './resource/index';
import { HomeRoutes } from './home/index';

export const routes: Routes = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...StartRoutes,
    ...LoginRoutes,
    ...ResourceRoutes
]