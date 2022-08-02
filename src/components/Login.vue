<script lang="ts">
import { useLoginStore } from "../stores/login";
import Toast from "../components/materials/Toast.vue";
import { useToastStore } from "../stores/toast";
import { defineComponent } from "vue-demi";

export default defineComponent({
  data() {
    return {
      form: {
        phone: "",
        password: "",
        latlong: "1",
        device_token: "1",
        device_type: "2",
      },
      isToastVisible: false,
      errorText: "",
    };
  },
  component: {
    Toast,
  },
  setup() {
    const login = useLoginStore();
    const toast = useToastStore();
    return {
      login,
      toast,
    };
  },
  methods: {
    handleSubmitForm() {
      this.login
        .loginAccount(this.form)
        .then(() => {
          this.$router.push("/profile");
        })
        .catch((error) => {
          console.log(error);
          const err = JSON.stringify(error);
          console.log(err);
          if (err.includes("you need verification phone number")) {
            this.isToastVisible = true;
            this.errorText = "you need verification phone number";
            setInterval(() => {
              this.isToastVisible = false;
            }, 3000);
          }
        });
    },
  },
});
</script>


<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Login
      </h2>
    </div>
    <div v-if="isToastVisible === true">
      <Toast backgroundColor="bg-red-50" width="48" height="48">
        <p class="toast-txt">{{ errorText }}</p>
      </Toast>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleSubmitForm">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <div class="mt-1">
              <input
                id="phone"
                name="phone"
                type="phone"
                autocomplete="phone"
                required=""
                v-model="form.phone"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                v-model="form.password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              value="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.toast-txt {
  @apply ml-1;
}
</style>