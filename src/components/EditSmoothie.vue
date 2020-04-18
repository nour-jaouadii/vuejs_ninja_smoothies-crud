  <template>

      <div v-if="smoothie" class="edit-smoothie" container>
          <h2>Edit   {{ smoothie.title }} smoothie </h2>
      </div>
  </template>
  
  <script>
  import db from '@/firebase/init'
// import slugify from "slugify";
  
  export default {

      name:'EditSmoothie',
      data(){
          return{
              smoothie:null
          
          }
      },
      created(){ //component created but not rendered to the dom  
      let ref=  db.collection('smoothies').where('slug','==',this.$route.params.smoothie_slug)
         ref.get().then(snapshot =>{
           //snapshot = view of  smoothies's collection
            snapshot.forEach(doc =>{
               // console.log(doc.data())
              this.smoothie = doc.data() // recieve data  from doc
              this.smoothie.id = doc.id  
              // this.smoothies.push(smoothie) 
           })
         })
       }
  }
  </script>
  