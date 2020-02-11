<template>
    <div >
        <topbar></topbar>
        <topheader></topheader>
        <nuxt/>
        <footers class="footercss"></footers>
       
    </div>
</template>
<script>
    import '@/assets/reset.css'
    import Footer from '@/components/Footer'
    import TopBar from '@/components/TopBar'
    import TopHeader from '@/components/TopHeader'
    export default {
        components: {
            'footers':Footer,
            'topbar':TopBar,
            'topheader':TopHeader
        }
    }

</script>
<style >
.footercss{
    float:left;
    padding-left:10%;
}
</style>
