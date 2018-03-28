<template>
 <div style="width:300px;height: 300px; background: grey;">
   <v-btn v-on:click="submit" type="submit" color="primary">CONTINUE</v-btn>
 </div>
</template>
<script>
    export default {
         computed: {
                    form() {
                        return this.$store.state.form;
                    },
                    items() {
                        return this.$store.state.items;
                    },
                },
      methods: {
      submit(){
          this.$emit('form1validity', 6);

      }
    }
}

</script>