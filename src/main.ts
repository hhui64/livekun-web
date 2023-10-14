import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'
import Vue3ColorPicker from 'vue3-colorpicker'
import PluginChatMessage from '@/plugins/ChatMessage'
import PluginPaid from '@/plugins/Paid'
import PluginTicket from '@/plugins/Ticket'
import 'ant-design-vue/dist/reset.css'
import 'vue3-colorpicker/style.css'
import 'dayjs/locale/zh-cn'
import '@/assets/styles/custom.less'

const app = createApp(App)

dayjs.locale('zh-cn')

app.use(Vue3ColorPicker)

// 使用平台插件必须在使用 router 之前调用
// 否则会导致平台插件动态添加路由失效 :)
app.use(PluginChatMessage)
app.use(PluginTicket)
app.use(PluginPaid)

app.use(createPinia()).use(router)

app.mount('#app')
