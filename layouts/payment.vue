<template>
    <div >
        
        <nuxt/>
        <footers class="footercss"></footers>
       
    </div>
</template>
<script>
    import '@/assets/reset.css'
    import Footer from '@/components/Footer'
    export default {
        components: {
            'footers':Footer
        }
    }

</script>
<style >
.footercss{
    float:left;
}
</style>

