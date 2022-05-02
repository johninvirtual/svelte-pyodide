<script lang="ts">
	import { onMount } from 'svelte';
	import type { runPython as rpType } from 'pyodide/api';
	import { pyodide } from '$lib/store';

	let pyodideAsync;
	let runPython: typeof rpType | undefined = undefined;

	let output = '';

	let replCode = '';
	let replOutput = '';

	pyodide.subscribe(value => {
		pyodideAsync =  value
	})

	onMount(async () => {
		const p = await pyodideAsync
		runPython = p.runPython
	})

	$: {
		if (runPython) {
			output = runPython(code);
		}
	}

	const runCode = () => {
		if (runPython) {
			replOutput = runPython(replCode);
		}
	};

	export let code = '2+2';
</script>

<div>
	<h2>Code</h2>
	<code>
		<pre>
            {code}
        </pre>
	</code>
</div>
<div>
	<h2>Output</h2>
	<code>
		{output}
	</code>
</div>

<hr />

<div>
	<h2>Code</h2>
	<textarea label="code" bind:value={replCode} />
</div>
<button on:click={runCode}>Run</button>
<div>
	<h2>Output</h2>
	<code>
		{replOutput}
	</code>
</div>
