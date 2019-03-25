<template>
    <div class="layout">
        <Header />
        <router-view />
        <Link />
        <fuFoot />
        <Footer />
    </div>
</template>


<script>
import Header from '@/components/Header'
import Link from '@/components/link'
import Footer from '@/components/Footer'
import fuFoot from '@/components/fuFoot'

export default {
    name: 'Layout',
    components: {
        Header,
        Link,
        Footer,
        fuFoot
    }
}
</script>

<style scoped>

</style>



