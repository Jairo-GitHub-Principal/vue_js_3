<template>
    <div>
        <button @click="sendforFather"> 
            <slot/> <!-- essa tag slot nos permiit add dados nela em qualquer lugar que esse component for declarado-->
            <slot name="icon"/>
            {{ variant }}
        </button>
    </div>
</template>

<script >

export default{

    props:{
        variant:{
            type: String,
            default:'success' // valor padrão da props variant
        }
    },

    setup(props,{slots,emit}){
        
        console.log(props.variant)
        console.log(slots)
        
        const sendforFather = ()=>{
            emit('update',props.variant)
        }

        return{
            sendforFather
        }
        
    }
}


</script>