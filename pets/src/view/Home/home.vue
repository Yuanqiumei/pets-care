<template>
    <div class="home">
        <Tip />
        <Welcome />
    </div>
</template>


<script>
import Tip from '@/view/Home/components/tip'
import Welcome from '@/view/Home/components/welcome'

export default {
    name: 'Home',
    components: {
        Tip,
        Welcome
    }
}
</script>

<style scoped>

</style>


