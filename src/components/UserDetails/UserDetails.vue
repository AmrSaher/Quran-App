<template>
    <aside class="user-details">
        <Welcome />
        <hr>
        <LastRead />
    </aside>
</template>

<script>
import Welcome from './Welcome.vue';
import LastRead from './LastRead.vue';

export default {
    name: 'UserDetails',
    components: {
        Welcome,
        LastRead
    }
};
</script>

<style lang="scss" scoped>
.user-details {
    position: fixed;
    top: 75px;
    right: 0;
    width: 250px;
    height: calc(100% - 75px);
    background-color: #fff;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    @media (max-width: 768px) {
        display: none;
    }
}
</style>