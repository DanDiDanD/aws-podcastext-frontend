import {PageLayout} from "../layouts/PageLayout"

//PAGES
import {Home} from '../pages/Home'
import { Error404 } from "../pages/Error404";

import { RUTAS } from "./constantes";

const routes = [
    {
        path: RUTAS.home,
        component: PageLayout,
        exact: false,
        routes: [
            {
                path: RUTAS.home,
                component: Home,
                exact: true,
            },
            {
                component: Error404,
            },

        ]
    },
    {
        component: Error404,
    },
]

export default routes;