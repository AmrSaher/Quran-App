<template>
    <div class="last-read">
        <div>
            <h1>Last read</h1>
            <p>Al-Fatiah</p>
        </div>
        <i class="fa-brands fa-readme"></i>
    </div>
</template>

<script>
export default {
    name: 'LastRead'
};
</script>

<style lang="scss" scoped>
.last-read {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div {
        h1 {
            color: var(--main-color);
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 15px;
        }
        p {
            font-size: 20px;
            font-weight: 500;
        }
    }
    i {
        color: var(--sm-color);
        font-size: 50px;
        opacity: 0.8;
    }
}
</style>