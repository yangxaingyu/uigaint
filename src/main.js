import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue";


import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './assets/css/magnific-popup.css'
import './assets/css/owl.carousel.css'
import './assets/css/off-canvas.css'
import './assets/css/all.min.css'
import './assets/css/sc-spacing.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import './assets/css/normalize.css'
import './assets/css/blueprint.css'
import './assets/css/blueprint-select.css'
import './assets/css/cropper.css'
import './assets/css/ico-moon-fonts.css'



const app = createApp(App)
app.use(router)
app.component('Header', Header)
app.component('Footer', Footer)


app.mount('#app')
