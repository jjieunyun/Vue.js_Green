Vue.component('review-container',{
    props : ['name','review','rating','recommend'],
    template : 
    `
    <div class="review-container">
        <h3> Reviews:</h3>
            <ul>
                <li>
                    <slot name="named1"></slot>님이 
                    <slot name="rating1"></slot>
                    점을 주었습니다.<br>
                    

                    "<slot name="review1"></slot>"<br>
                    Recommended: 
                    <slot name="recommend1"></slot>
                </li>
            </ul>
    </div>
    `,
    data () {
        return {
            
        }
    },
    methods : {
        
    },


});