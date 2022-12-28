export default {
  nitro: {
    preset: 'vercel-edge',
  },
  head: {
     css: [
       '~/assets/styles/app.styl',
     ],
     link: [{ rel:"stylesheet", type:"text/css", href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"}]
  },
};
