Vue.createApp({
    data() {
        return {
            header: "Shopping List App",
            editing: false,
            newItem: '',
            newItemHighPriority: false,
            items: [
                {
                    id: Math.random().toString(32).slice(2, 8),
                    label: "10 party hats",
                    purchased: true,
                    highPriority: false,
                },
                {
                    id: Math.random().toString(32).slice(2, 8),
                    label: "2 board games",
                    purchased: true,
                    highPriority: true,
                },
                {
                    id: Math.random().toString(32).slice(2, 8),
                    label: "20 cups",
                    purchased: false,
                    highPriority: true,
                },
            ],
        };
    },
    computed: {
        characterCount() {
            return this.newItem.length
        },
        reversedItems() {
            return [...this.items].reverse()
        }
    },
    methods: {
        saveItem() {
            if (this.newItem.length < 5 || this.newItem.length > 50) return
            this.items.push({
                id: this.items.length + 1,
                label: this.newItem,
                highPriority: this.newItemHighPriority,
            })
            this.newItem = ''
            this.newItemHighPriority = false
        },
        doEdit(editing) {
            this.editing = editing
            this.newItem = ''
            this.newItemHighPriority = false
        },
        togglePurchased(item) {
            item.purchased = !item.purchased
        }
    }

}).mount('#app')