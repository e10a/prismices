<template>
  <section class="xxx">
    <section
      class="
        mobile:bg-black
        bg-opacity-5
        tablet:bg-pink-500
        laptop:bg-green-500
        desktop:bg-red-500
        text-white text-center text-xs
      "
    >
      TEST
    </section>

    <section class="my-4">
      <div
        class="am-section-content flex justify-between items-stretch gap-6 h-10"
      >
        <div>
          <img
            class="py-1 max-h-full w-auto"
            src="~/assets/img/amava-circles-purple.svg"
          />
        </div>
        <div class="flex-1">
          <div class="border rounded-full bg-black bg-opacity-10 h-full"></div>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-sm">SIGN IN</div>
          <font-awesome-icon :icon="'shopping-cart'" />
        </div>
      </div>
    </section>

    <section class="my-4">
      <div class="am-section-content flex justify-between">
        <div>[link]</div>
        <div>[link]</div>
        <div>[link]</div>
        <div>[link]</div>
        <div>[link]</div>
        <div>[link]</div>
      </div>
    </section>

    <section class="relative text-white">
      <div class="absolute h-full w-full flex flex-col">
        <div class="flex-1 relative">
          <div
            class="
              absolute
              h-full
              w-full
              bg-gradient-to-r
              from-fuchsia-800
              via-violet-800
              to-teal-600
              opacity-90
            "
          ></div>
        </div>
        <div class="flex-1"></div>
      </div>
      <div class="relative am-section-content">
        <div class="py-6">
          <h2 class="text-4xl text-center font-serif">
            {{ $prismic.asText(pageContent.title) }}
          </h2>
        </div>
        <div class="flex justify-between">
          <div class="text-center space-y-2">
            <div class="rounded-full h-24 w-24 bg-gray-500 overflow-hidden">
              <img src="https://source.unsplash.com/300x300?nature" />
            </div>
            <div class="text-gray-700">[some text]</div>
          </div>
          <div class="text-center space-y-2">
            <div class="rounded-full h-24 w-24 bg-gray-500 overflow-hidden">
              <img src="https://source.unsplash.com/300x300?animal" />
            </div>
            <div class="text-gray-700">[some text]</div>
          </div>
          <div class="text-center space-y-2">
            <div class="rounded-full h-24 w-24 bg-gray-500 overflow-hidden">
              <img src="https://source.unsplash.com/300x300?food" />
            </div>
            <div class="text-gray-700">[some text]</div>
          </div>
          <div class="text-center space-y-2">
            <div class="rounded-full h-24 w-24 bg-gray-500 overflow-hidden">
              <img src="https://source.unsplash.com/300x300?person" />
            </div>
            <div class="text-gray-700">[some text]</div>
          </div>
          <div class="text-center space-y-2">
            <div class="rounded-full h-24 w-24 bg-gray-500 overflow-hidden">
              <img src="https://source.unsplash.com/300x300?ocean" />
            </div>
            <div class="text-gray-700">[some text]</div>
          </div>
          <div class="text-center space-y-2">
            <div class="rounded-full h-24 w-24 bg-gray-500 overflow-hidden">
              <img src="https://source.unsplash.com/300x300?party" />
            </div>
            <div class="text-gray-700">[some text]</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6">
      <div class="am-section-content space-y-4">
        <h3 class="font-serif">Popular Classes Right Now</h3>
        <div class="flex justify-between">
          <button
            v-for="item in classes"
            :key="item.id"
            class="
              relative
              rounded
              shadow
              overflow-hidden
              h-40
              w-40
              hover:scale-105
              duration-300
              transition-all
            "
          >
            <img
              class="absolute h-full w-full top-0 left-0"
              style="filter: blur(4px)"
              :src="item.image"
            />
            <div
              class="
                absolute
                h-full
                w-full
                top-0
                left-0
                opacity-60
                bg-purple-800
              "
            ></div>
            <div
              class="
                absolute
                h-full
                w-full
                top-0
                left-0
                opacity-60
                bg-gradient-to-l
                from-green-500
              "
            ></div>
            <div class="relative font-sans text-white p-4 text-left">
              {{ item.name }}
            </div>
          </button>
        </div>
      </div>
    </section>

    <section class="relative">
      <div
        class="
          absolute
          top-0
          left-0
          w-full
          h-full
          opacity-90
          bg-gradient-to-b
          from-fuchsia-800
          via-indigo-800
          to-teal-600
        "
      ></div>
      <div
        class="
          relative
          am-section-content
          text-white text-center
          space-y-10
          py-12
        "
      >
        <div class="space-y-2">
          <h2 class="font-serif text-3xl">What is Amava?</h2>
          <p class="font-paragraph">
            <a href="#" class="underline">Read our mission</a>
          </p>
        </div>
        <div class="flex gap-6">
          <div class="space-y-2">
            <h4 class="font-serif text-xl leading-tight">
              A community doing good
            </h4>
            <p class="font-paragraph leading-snug">
              Big ol boofers what a nice floof long woofer shoob long water
              shoob, heckin long water shoob bork. Wrinkler boof heckin good
              boys and girls, puggo.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="font-serif text-xl leading-tight">
              Support independent creators
            </h4>
            <p class="font-paragraph leading-snug">
              Big ol boofers what a nice floof long woofer shoob long water
              shoob, heckin long water shoob bork. Wrinkler boof heckin good
              boys and girls, puggo.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="font-serif text-xl leading-tight">Peace of mind</h4>
            <p class="font-paragraph leading-snug">
              Big ol boofers what a nice floof long woofer shoob long water
              shoob, heckin long water shoob bork. Wrinkler boof heckin good
              boys and girls, puggo.
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <p>Have a question? Well, we’ve got some answers.</p>
          <button
            class="
              border-2 border-white
              rounded-full
              px-6
              py-4
              hover:bg-white hover:bg-opacity-20
            "
          >
            Go to Help Center
          </button>
        </div>
      </div>
    </section>

    <section class="py-6">
      <div class="am-section-content text-center space-y-8">
        <div class="space-y-2">
          <h3 class="font-serif text-2xl text-violet-600">
            Subscribe to our newsletter
          </h3>
          <p>Yes! Send me updates for new classes.</p>
        </div>
        <div
          class="
            rounded-full
            border-2 border-violet-700
            h-16
            inline-flex
            items-stretch
            justify-end
          "
        >
          <div class="w-96"></div>
          <button
            class="
              bg-violet-200
              rounded-full
              text-violet-700
              px-6
              py-4
              flex
              items-center
              bg-opacity-0
              hover:bg-opacity-100
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Homepage",
  head() {
    return {
      title: "Homepage"
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const pageContent = (await $prismic.api.getSingle("homepage")).data;
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post"),
        { orderings : '[my.post.date desc]' }
      )
      // Returns data to be used in template
      return {
        pageContent,
        posts: blogPosts.results,
        classes: []
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
