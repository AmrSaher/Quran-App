<template>
    <nav class="links">
        <router-link to="/">Quran</router-link>
        <router-link to="/h">Hadith</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavLinks'
};
</script>

<style lang="scss">
.links {
    display: flex;
    align-items: center;
    gap: 10px;
    a {
        font-size: 22px;
        font-weight: 400;
        color: var(--sm-color);
        &.active {
            color: var(--text-color);
            font-weight: 500;
        }
    }
}
</style>