<template>
<div id="app">
    <nuxt/>
    <footers></footers>
</div>
</template>
<script>
import  Footer from '@/components/Footer'
export default {

    components:{
        'footers':Footer
    }
}


</script>