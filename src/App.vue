<template>
  <Header />
  <Sidebar />
  <router-view/>
  <UserDetails /> 
</template>

<script>
import Header from './components/Header/Header.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
import UserDetails from './components/UserDetails/UserDetails.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    UserDetails
  }
};
</script>