<template>
  <div class="flex px-4 py-4 max-w-md">
    <div v-if="loading">Loading user list ...</div>
    <div v-else>
      <div
        v-for="(user, index) in response.results"
        :key="'repo' + index"
        class="flex flex-col p-4 bg-gray-200 shadow-2xl rounded-md my-4"
      >
        <div class="flex justify-between items-center">
          <h1 class="text-gray-800 font-semibold text-2xl">
            {{ user.name.first + ' ' + user.name.last }}
          </h1>
          <img
            class="border border-indigo-200 rounded-full"
            :src="user.picture.medium"
          />
        </div>

        <div class="flex items-center my-1">
          <span>
            <svg
              class="text-gray-800 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              ></path>
            </svg>
          </span>
          <a class="cursor-pointer underline text-indigo-400">
            {{ user.email }}
          </a>
        </div>
        <div class="flex items-center my-1">
          <span>
            <svg
              class="text-gray-800 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </span>
          {{ user.phone }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {},
  data() {
    return {
      url: 'https://randomuser.me/api/?results=5',
      response: null,
      loading: true
    };
  },
  created() {
    axios.get(this.url).then(response => {
      console.log(response.data);
      this.response = response.data;
      this.loading = false;
    });
  }
};
</script>
