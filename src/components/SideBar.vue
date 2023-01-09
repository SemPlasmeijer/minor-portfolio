<template>
  <div class="container">
    <div class="profileImage">
      <img src="../assets/profileSquare.jpg" />
    </div>
    <div class="name">Sem Plasmeijer</div>
    <div class="title">Software Dev</div>

    <div class="links">
      <SideBarItem
        :key="page.link"
        v-for="page in pageArray"
        :popover="page.popover"
        :link="page.link"
      />
    </div>

    <div class="socials">
      <font-awesome-icon class="circle fa-fw" icon="fa-brands fa-twitter" />
      <font-awesome-icon class="circle fa-fw" icon="fa-brands fa-linkedin" />
      <font-awesome-icon class="circle fa-fw" icon="fa-brands fa-github" />
      <font-awesome-icon class="circle fa-fw" icon="fa-solid fa-envelope" />
    </div>
    <div class="copyright">
      © 2022 SemPlasmeijer.com <br />
      Last Updated : 10/17/2022 11:16:05
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageArray: [
        {
          popover: "Home",
          link: "",
        },
        {
          popover: "Wie ben ik?",
          link: "description",
        },
        {
          popover: "Blogs",
          link: "blogs",
        },
        {
          popover: "Certificates",
          link: "certificates",
        },
        {
          popover: "Leerdoelen",
          link: "leerdoelen",
        },
        {
          popover: "Project",
          link: "leerdoelen",
        },

      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--vt-c-white-soft);

  .name {
    text-align: center;
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
    font-size: 30px;
  }

  .title {
    text-align: center;
    color: var(--vt-c-secondary);
  }
  .profileImage {
    display: flex;
    justify-content: center;
    padding: 2rem 0rem 0.5rem 0rem;
    img {
      border: var(--vt-c-white-soft) 3px solid;
      border-radius: 9999rem;
      width: 50%;
    }
  }

  .links {
    display: flex;
    padding: 2rem 0rem 1rem 2.5rem;
    flex-direction: column;
    flex: 1;
  }

  .socials {
    font-size: 20px;
    color: var(--vt-c-gray-mute);
    display: flex;
    justify-content: center;
    padding: 5rem 0rem 1rem 0rem;

    .circle {
      background-color: var(--vt-c-black);
      border: var(--vt-c-black) 1px solid;
      margin-right: 10px;
      border-radius: 9999rem;
      padding: 0.5rem;
      cursor: pointer;
      &:hover {
        color: var(--vt-c-secondary);
      }
    }
  }

  .copyright {
    position: relative;
    text-align: center;
    font-size: 12px;
    padding-bottom: 1rem;
    color: var(--vt-c-gray-mute);
  }
  background-color: var(--vt-c-black-soft);
}
</style>