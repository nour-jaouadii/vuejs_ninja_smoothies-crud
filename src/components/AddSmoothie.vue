<template>
    
<div class="add-smoothie container">
    <h2 class="center align indigo-text" >Add New Smoothie Recipe</h2>    
      <form @submit.prevent="AddSmoothie" >
          <div class="field title" >
              <label for="title">Smoothie Title:</label>
              <input type="text" name="title" v-model="title">
          </div>
            <div v-for="(ing,index) in   ingredients" :key="index" class="field">
                <label for="igredient">ingredient:</label>
                <input type="text" name="ingredient" v-model="ingredients[index]">
                <i class="material-icons delete" @click="deleting(ing)">delete</i>
            </div>
           <div class="field add-ingredient" >
              <label for="ingredient" >Add an  ingredient:</label>
              <input type="text" name="ingredient" @keydown.tab.prevent='addIng' v-model="another" > 
              <!--  adding .prevent  because the default behavior of the tab go  to next field
                 (el cursor tbadel) -->
          </div>

           <div class="field center-align" >
               <p v-if ="feedback" class="red-text">{{ feedback}} </p>
             <button class="btn pink">Add Smoothie</button>
          </div>
      </form>
</div>    
</template>

<script>
import db from '@/firebase/init'
import slugify from "slugify";

export default {
    name: 'AddSmoothie',
    data(){
        return {
            title: null,
            another: null,
            ingredients: [],  
            feedback: null,
            slug: null,
        }
    },
    methods: {
        AddSmoothie(){
           // console.log(this.title, this.ingredients)
           if(this.title){
             this.feedback = null
             this.slug = slugify(this.title, {
                 replacement:'-',
                 remove: /[$*__+~.()'"!\-:@]/g,
                 lower: true 
             })
              
               db.collection("smoothies").add({
                    title: this.title,
                    ingredients: this.ingredients,
                    slug: this.slug
             }).then(() =>{
                this.$router.push({ name: 'index' })
             }).catch(err => {
                 console.log(err)
             })

           }else{
               this.feedback='you must enter a smoothie title'
           }
        },
        
        addIng(){
            if(this.another){  // this.another = true c.a.d not null
                this.ingredients.push(this.another) 
               // console.log(this.ingredients)
                this.another = null
                this.feedback = null
            } else {
                this.feedback ='you must entera value to add an ingredient'
            }    
        },

        deleting(ing){
            
             this.ingredients =  this.ingredients.filter(ingredient =>{
                 
                  return ingredient != ing
                  //if( filter return false) the item remove from the array

             })
        }
         

    }

}
</script>

<style>
.add-smoothie{
     margin-top: 60px;
     padding: 20px;
     max-width: 500px ;
}

.add-smoothie h2{
    font-size : 2em;
    margin: 20 px auto;
} 
.add-smoothie .field{
    
    margin: 20px auto;
    position: relative;
}
.add-smoothie .delete{
    position:absolute;
    right:0;
    bottom: 16px;
    color: #aaa;
    font-size:1.4em;
    cursor: pointer;
}
</style>

