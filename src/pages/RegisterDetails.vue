<template>
  <div class="container mt-5">
    <h2>Bitte gebe weitere Informationen an.</h2>
    <form @submit.prevent="handleCompleteRegistration">
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstName" v-model="firstName" required>
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastName" v-model="lastName" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" class="form-control" id="phone" v-model="phone">
      </div>
      <div class="mb-3">
        <label for="birthDate" class="form-label">Birth Date</label>
        <input type="date" class="form-control" id="birthDate" v-model="birthDate" required>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" v-model="address" required>
      </div>
      <button type="submit" class="btn btn-primary">Registrierung abschließen</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import api from '@/api';

export default defineComponent({
  name: 'RegisterDetails',
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const phone = ref('');
    const birthDate = ref('');
    const address = ref('');
    const router = useRouter();
    const route = useRoute();
    const username = ref(route.query.username);
    const password = ref(route.query.password);

    const handleCompleteRegistration = async () => {
      if (firstName.value && lastName.value && email.value && birthDate.value && address.value) {
        const user = {
          username: username.value,
          password: password.value,
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phone: phone.value,
          birthDate: birthDate.value,
          address: address.value,
        };
        try {
          await api.createUser(user);
          alert('User created successfully');
          router.push('/login');
        } catch (error) {
          console.error('Error creating user', error);
          alert('Error creating user');
        }
      }
    };

    return {
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      address,
      handleCompleteRegistration,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
