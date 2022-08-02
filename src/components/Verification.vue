<script lang="ts">
import { defineComponent } from "vue";
import { resendStore } from "../stores/resend";

export default defineComponent({
  props: {
    phone: String,
  },
  data() {
    return {
      resendPhone: {
        phone: this.phone,
      },
    };
  },
  setup() {
    const resend = resendStore();
    return {
      resend,
    };
  },
  methods: {
    sendOTP() {
      this.resend
        .resendVerification(this.resendPhone)
        .then(() => {
          this.passPhone();
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
            <span>Enter the OTP you received </span>
          </div>

          <div
            id="otp"
            class="flex flex-row justify-center text-center px-2 mt-5"
          >
            <input
              class="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="first"
              maxlength="1"
            />
            <input
              class="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="second"
              maxlength="1"
            />
            <input
              class="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="third"
              maxlength="1"
            />
            <input
              class="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="fourth"
              maxlength="1"
            />
          </div>

          <div
            class="flex justify-center text-center mt-5"
            @pass-phone="updateOtp"
          >
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
