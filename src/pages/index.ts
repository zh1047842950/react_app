import {asyncComponent} from '../components'

const Home = asyncComponent(() => import('./home'))
const About = asyncComponent(() => import('./about'))
const Community = asyncComponent(() => import('./community'))
const Mall = asyncComponent(() => import('./mall'))

export {
    Home,
    About,
    Mall,
    Community
}
