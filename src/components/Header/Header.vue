<template>
    <header class="header">
        <div class="left">
            <router-link to="" class="logo">
                <i class="fa-solid fa-book-quran"></i>
            </router-link>
            <NavLinks />
        </div>
        <div class="right">
            <SearchBar />
            <button class="menu-btn flat-btn" @click="showMenu"><i class="fa-solid fa-bars"></i></button>
        </div>
    </header>
    <Menu />
</template>

<script>
import NavLinks from './NavLinks.vue';
import SearchBar from './SearchBar.vue';
import Menu from './Menu.vue';

export default {
    name: 'Header',
    components: {
        NavLinks,
        SearchBar,
        Menu
    },
    methods: {
        showMenu() {
            this.$store.commit('showMenu', true);
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    position: sticky;
    top: 0;
    left: 0;
    height: 75px;
    width: 100;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 30px;
    .left {
        display: flex;
        align-items: center;
        gap: 20px;
        .logo {
            i {
                width: 43px;
                height: 43px;
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--main-color);
                color: #fff;
                border-radius: 50%;

            }
        }
        .links {
            @media (max-width: 768px) {
                display: none;
            }
        }
    }
    .right {
        display: flex;
        align-items: center;
        .search {
            @media (max-width: 768px) {
                display: none;
            }
        }
        .menu-btn {
            font-size: 23px;
            display: none;
            @media (max-width: 768px) {
                display: block;
            }
        }
    }
}
</style>