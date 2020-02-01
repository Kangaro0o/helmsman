<template>
    <div id="app">
         <topBar></topBar>
         <topHeader></topHeader>
        <nuxt/>
        <footers class="footercss"></footers>
    </div>
</template>
<script>
    import TopBar from '@/components/TopBar'
    import TopHeader from '@/components/TopHeader'
    import Footer from '@/components/Footer'
export default {
    components: {
        'footers': Footer,
        'topBar': TopBar,
        'topHeader':TopHeader
    }
}
</script>
<style >
.footercss{
    float:left;
    }
</style>