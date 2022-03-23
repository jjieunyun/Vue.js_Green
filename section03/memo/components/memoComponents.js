Vue.component('memo-component', {
    props : ['id'],
    template : 
    `
    <div class="memo">
        <h3>메모<button class="btn" @click="deletememo">X</button></h3>
        <p><slot>{{memo}}</slot><br>
        {{this.time}}
        </p>
    </div>
    `,
    data () {
        return {
            time : new Date(),
        }
    },
    methods : {
        deletememo () {
            this.$emit('delete',this.id)
        }
    }
});
