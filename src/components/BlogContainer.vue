<template>
  <div class="blogContainer">
    <div class="blogItem" :key="blog.blogId" v-for="blog in blogList">
      <h2>
        {{ blog.title }}
        <font-awesome-icon
          @click="dropBlog(blog.blogId)"
          class="dropper fa-fw"
          :icon="setChevron(blog.blogId)"
        />
      </h2>
      <p class="description">{{ blog.description }}</p>
      <div class="blogContent" v-show="blog.dropped">
        <div
          :key="paragraph.id"
          v-for="paragraph in blog.paragraphs"
          class="blogParagraph"
        >
          <h3>{{ paragraph.title }}</h3>
          <p>{{ paragraph.content }}</p>
        </div>
        <div class="linkToContent">
          Voor meer informatie kijk naar de volgende links
          <ul>
            <li :key="file.name" v-for="file in blog.files">
              <a target="_blank" :href="file.path">{{ file.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blogList: {
      Type: Object,
      required: true,
    },
  },

  data() {
    return {
      currentDrop: null,
    };
  },

  methods: {
    setChevron(id) {
      if (this.currentDrop == id) {
        return "fa-solid fa-chevron-circle-up";
      }
      return "fa-solid fa-chevron-circle-down";
    },
    dropBlog(id) {
      this.blogList.forEach((blog) => {
        blog.dropped = false;
      });
      if (this.currentDrop !== id) {
        this.currentDrop = id;
        this.blogList.find((blog) => blog.blogId == id).dropped = true;
      } else {
        this.currentDrop = null;
      }
    },
  },
};
</script>
<style lang="scss">
.blogContainer {
  margin-top: 2rem;
  margin-left: 5rem;

  .blogItem {
    margin-bottom: 1.5rem;
    width: 100%;
    
    h2 {
        font-weight: 700;
    }

    .dropper {
      cursor: pointer;

      &:hover {
        color: var(--vt-c-gray-mute);
      }
    }

    .description {
      max-width: 40%;
      font-style: italic;
      font-size: small;
    }

    .blogContent {
      max-width: 75%;
      .blogParagraph {
        margin-top: 1rem;
        h3 {
            font-weight: 600;
        }
      }

      .linkToContent {
        margin-top: 1rem;
        ul {
          li {
            a {
              text-decoration: none;
              border-bottom: 2px solid var(--vt-c-secondary);
              box-shadow: inset 0 -4px 0 var(--vt-c-secondary);
              color: inherit;
              transition: background 0.1s cubic-bezier(0.33, 0.66, 0.66, 1);
              &:hover {
                background: var(--vt-c-secondary);
              }
            }
          }
        }
      }
    }
  }
}
</style>
