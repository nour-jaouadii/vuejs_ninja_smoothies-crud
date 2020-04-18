<template>
    
<div class="add-smoothie container">
    <h2 class="center align indigo-text" >Add New Smoothie Recipe</h2>    
      <form @submit.prevent="AddSmoothie" >
          <div class="field title" >
              <label for="title">Smoothie Title:</label>
              <input type="text" name="title" v-model="title">
          </div>

           <div class="field add-ingredient" >
              <label for="ingredient">Add an  ingredient:</label>
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
export default {
    name: 'AddSmoothie',
    data(){
        return {
            title: null,
            another: null,
            ingredients: [],  
            feedback: null,

        }
    },
    methods: {
        AddSmoothie(){
            console.log(this.title, this.ingredients)
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
    
    margin: 20px auto
}
</style>

