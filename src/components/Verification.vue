<script lang="ts">
import { defineComponent } from "vue";
import { matchStore } from "../stores/match";
import { resendStore } from "../stores/resend";

export default defineComponent({
  data() {
    return {
      resendPhone: {
        phone: this.phone,
      },
      matchOtp: {
        one: null,
        two: null,
        three: null,
        four: null,
      },
    };
  },
  props: {
    phone: {
      type: String,
    },
  },
  setup() {
    const resend = resendStore();
    const match = matchStore();
    return {
      resend,
      match,
    };
  },
  methods: {
    sendOTP() {
      this.resend
        .resendVerification(this.resendPhone)
        .then(() => {
          console.log("done");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    register() {
      this.match
        .matchVerification(this.matchOtp)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>



<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="w-full">
        <div class="bg-white h-64 py-3 rounded text-center">
          <h1 class="text-2xl font-bold">OTP Verification</h1>
          <div class="flex flex-col mt-4">
            <span>Enter the OTP you received {{ phone }}</span>
          </div>

          <div
            id="otp"
            class="flex flex-row justify-center text-center px-2 mt-5"
          >
            <form @submit.prevent="register">
              <input
                class="m-2 border h-10 w-10 text-center form-control rounded"
                type="text"
                id="first"
                maxlength="1"
                v-model="one"
                v-on:keyup="$refs.second.focus"
              />
              <input
                class="m-2 border h-10 w-10 text-center form-control rounded"
                type="text"
                id="second"
                maxlength="1"
                v-model="two"
                ref="second"
                v-on:keyup="$refs.third.focus"
              />
              <input
                class="m-2 border h-10 w-10 text-center form-control rounded"
                type="text"
                id="third"
                maxlength="1"
                v-model="three"
                ref="third"
                v-on:keyup="$refs.fourth.focus"
              />
              <input
                class="m-2 border h-10 w-10 text-center form-control rounded"
                type="text"
                id="fourth"
                maxlength="1"
                v-model="four"
                ref="fourth"
              />
            </form>
          </div>

          <div class="flex justify-center text-center mt-5">
            <button
              type="submit"
              value="submit"
              class="items-center text-blue-700 hover:text-blue-900 cursor-pointer"
              @click="sendOTP"
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
