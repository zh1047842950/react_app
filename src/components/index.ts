import asyncComponent from './async_component'

const Navs = asyncComponent(() => import("./navs"))
export {
    asyncComponent,
    Navs
}
