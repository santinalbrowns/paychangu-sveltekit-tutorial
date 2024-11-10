<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex items-center h-screen">
	{@render children()}
</div>
