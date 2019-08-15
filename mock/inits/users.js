const prefix = 'home'

// 支持 module.exports
export default [
  {
    username: 'user',
    roles: [
      {
        code: 'USER'
      }
    ],
    authorities: [
      {
        pid: `${prefix}`
      }
    ]
  },
  {
    username: 'admin',
    roles: [
      {
        code: 'ADMIN'
      }
    ],
    authorities: [
      {
        pid: `${prefix}`
      },
      {
        pid: `${prefix}.dashboard`
      }
    ]
  }
]
