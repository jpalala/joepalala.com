export default {
  nitro: {
    preset: 'vercel-edge',
  },
  head: {
     css: [
       '@/assets/styles/app.styl',
       '@/assets/css/devicon.min.css'
     ],
  },
};
