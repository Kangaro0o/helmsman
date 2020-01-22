<template>
    <div >
        <nuxt/>
        <footers></footers>
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