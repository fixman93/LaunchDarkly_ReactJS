import Nav from '../modules/nav'

const nav = new Nav()
nav.add({ label: 'Home', link: '/', toggleName: 'home' })
nav.add({ label: 'Dashboard', link: '/dashboard', toggleName: 'dashboard' })
nav.add({ label: 'About', link: '/about', toggleName: 'about' })

export default nav
