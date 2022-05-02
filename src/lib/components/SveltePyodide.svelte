<script>
	import { amp, browser, dev, mode, prerendering } from '$app/env';

	let runPython = undefined;
	let output = '';

	let replCode = '';
	let replOutput = '';

	if (browser) {
		const main = async () => {
			const module = await import('pyodide/pyodide');

			const pyodide = await module.loadPyodide({
				indexURL: '/pyodide-cdn'
			});

			runPython = pyodide.runPython;
		};

		main();
	}

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
