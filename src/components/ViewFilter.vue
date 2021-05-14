<template>
<div class="container py-2 inputs">    
    <div class="input-group">
        <span class="input-group-addon addon-lg">Filter</span>
        <select class="form-select" @change="fieldCheck" id="selection">
            <option>--Select Field--</option>
            <option v-for="(field,key) in fields" :key="key" :value="field">{{field}}</option>
        </select>
        <input type="text" class="form-input input-lg" id="filter_input" disabled @input="getInput">
    </div>
</div>    
</template>

<script>
export default {
    name: 'Filter',
    props:{
        fields:{
            type: Object,
            required: true
        }
    },
    emits: ['filter'],
    setup() {
        
    },
    methods: {
        fieldCheck: function(){
            var selected = document.getElementById('selection').value;
            if (selected != '--Select Field--'){
            document.getElementById('filter_input').disabled = false;
            }else{
            document.getElementById('filter_input').disabled = true;
            }  
        },
        getInput: function(){
            var field = document.getElementById('selection').value;
            var term = document.getElementById('filter_input').value;
            this.$emit('filter',field,term);
        }
    }
}
</script>

<style scoped>
.inputs{
    max-width: 1000px;
}
.form-select{
    height: auto;
    max-width: max-content;
}
inpdfbdut{
    width: -webkit-fill-available;
}

</style>