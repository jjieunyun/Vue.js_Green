Vue.component('product-display',{
    data () {
        return {
            brand : 'Green',
            product : 'Mask',
            pay : '15,000원',
            details : [
                '폴리프로필렌 부직포',
                '플라스틱(코편)', 
                '나일론끈',
            ], 
            variants : [
                {color : 'white', image: './images/mask_white.jpg',stock : 10},
                {color : 'black', image: './images/mask_black.jpg', stock : 0},
            ],
            //선택한 상품
            Selection : 0,
        }
    },
    template : 
    `
        <div class="product-display">
            <div class="product-container">
                    <!--이미지추가-->
                    <div class="product-image">
                        <img v-bind:src="image">
                    </div>
                    
                    <!--상품설명-->
                    <div class="product-info">
                        <h1>{{title}}</h1>
                        <p v-if="isStock">재고가 남아있습니다</p>
                        <p v-else>재고가 없습니다</p>

                        <p>금액  : {{pay}}</p>

                        <!--상품 세부설명-->
                        <ul>
                            <!--배열로 들고와서 한번에 출력-->
                            <li v-for="detail in details">{{detail}}</li>
                        </ul>
                        
                        <!--색상바꾸기-->
                        <!--v-for의 값을 두개 들고오면 뒤에 오는 값은 배열의 인덱스 값-->
                        <div 
                            class="color-circle"
                            v-for="(variant, index) in variants"
                            v-bind:style="{backgroundColor: variant.color}"
                            v-on:mouseover="updateVariant(index)">
                        </div>
                        

                        <!--버튼-->
        
                        <button 
                        class="button" 
                        v-bind:class="{disabledButton : !isStock}">
                        장바구니에 추가</button>
                    </div>
            </div>
        </div>
    `,
    methods : {
        updateVariant(index) {
            this.Selection = index;
        }
    },
    computed : {
        title () {
            return this.brand +" "+this.product
        },
        image () {
            //배열의 이미지값을 들고오기 위함
            return this.variants[this.Selection].image
        },
        isStock () {
            //배열의 재고의 값을 들고오기 위함
            return this.variants[this.Selection].stock
        }
    },
})