<template>
    <aside class="sidebar">
        <nav class="links">
            <router-link to="/"><i class="fa-solid fa-book-quran"></i></router-link>
            <router-link to="/h"><i class="fa-solid fa-heart"></i></router-link>
        </nav>
        <nav class="links">
            <a class="logout"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar'
};
</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    top: 75px;
    left: 0;
    width: 83px;
    height: calc(100% - 75px);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    .links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        a {
            color: var(--text-color);
            font-size: 26px;
            cursor: pointer;
            &.active {
                color: var(--main-color);
            }
            &.logout {
                font-size: 24px;
            }
        }
    }
}
</style>