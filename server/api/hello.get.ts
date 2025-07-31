export default defineEventHandler((event) => {
  return {
    hello: 'world',
    name: 'John Doe',
    message: 'Welcome to Nuxt 4!',
  }
})

// http://localhost:3000/api/hello/
// .get
// .post is best practice to use .get and .post 