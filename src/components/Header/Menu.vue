<template>
    <aside class="menu" :style="showMenu ? 'right: 0;' : 'right: -250px;'">
        <button class="close-btn flat-btn" @click="closeMenu"><i class="fa-solid fa-xmark"></i></button>
        <SearchBar />
        <NavLinks />
        <Welcome />
        <LastRead />
    </aside>
</template>

<script>
import NavLinks from './NavLinks.vue';
import SearchBar from './SearchBar.vue';
import Welcome from '../UserDetails/Welcome.vue';
import LastRead from '../UserDetails/LastRead.vue';

export default {
    name: 'Menu',
    components: {
        NavLinks,
        SearchBar,
        Welcome,
        LastRead
    },
    computed: {
        showMenu() {
            return this.$store.getters.showMenu;
        }
    },
    methods: {
        closeMenu() {
            this.$store.commit('showMenu', false);
        }
    }
};
</script>

<style lang="scss" scoped>
.menu {
    position: fixed;
    top: 0;
    right: -250px;
    height: 100%;
    width: 250px;
    background-color: var(--gray-color);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    transition: 0.3s right ease-in-out;
    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
    }
    .search {
        width: 100%;
        margin-top: 35px;
    }
}
</style>