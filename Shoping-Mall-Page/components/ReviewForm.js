Vue.component('review-form',{
    template : 
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>리뷰를 남겨주세요</h3>
        <label for="name">이름 : </label>
        <input type="text" id="name" v-model="name">

        <label for="review">리뷰 : </label>
        <textarea v-model="review" id="review" cols="30" rows="10"></textarea>

        <label for="rating">별점 </label>
        <select v-model="rating"  id="rating" style="margin-bottom:20px">
            <option value="5"> ★★★★★ </option>
            <option value="4"> ★★★★ </option>
            <option value="3"> ★★★ </option>
            <option value="2"> ★★ </option>
            <option value="1"> ★ </option>
        </select>

        <label for="recommend" >이 물건을 추천하시나요? </label>
        <select  v-model="recommend" id="recommend" style="margin-bottom:15px">
            <option value="Yes"> Yes </option>
            <option value="No"> No </option>
        </select>

        <input class="button" type="submit" value="submit">
    </form>
    `,
    data () {
        return {
            name : '',
            review : '',
            rating : null,
            recommend : null,
        }
    },
    methods : {
        onSubmit () {
            let productReview = {
                name: this.name, 
                review: this.review, 
                rating: this.rating, 
                recommend: this.recommend 
                }
                this.$emit('submit-riview',productReview)
            }
            
        
    },

});
