<script>
	import SveltePyodide from '$lib/components/SveltePyodide.svelte';
</script>

<SveltePyodide
	code={`
for i in [1,2,3,4]:
    print(i)
`}
/>
