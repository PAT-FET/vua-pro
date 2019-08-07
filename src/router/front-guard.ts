import { NavigationGuard } from 'vue-router'

const frontGuard: NavigationGuard = function (to, from, next) {
  next()
}

export default frontGuard
