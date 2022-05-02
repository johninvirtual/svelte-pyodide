export const loadInterpreter = async function (): Promise<any> {
    const module = await import('pyodide/pyodide');

    const pyodide = await module.loadPyodide({
        stdout: console.log,
        stderr: console.log,
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"
    });

    // load micropip
    await pyodide.loadPackage('micropip');

    return pyodide;
};
