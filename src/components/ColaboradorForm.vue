<template>
    <div :visible="displayBasic">
        <Dialog header="Header" :visible="displayBasic" :style="{width: '50vw'}">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
            </template>
        </Dialog>
    </div>
    
</template>
<script>
import Dialog from 'primevue/dialog';
export default {
    name: "ColaboradorForm",
    	data() {
		return {
            displayBasic:false
			
		}
	},
    props : ["displayBasic"],
    components: {
        Dialog
    }
}
</script>